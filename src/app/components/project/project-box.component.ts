import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Project} from "../../models/Project";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-project-box',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
      <div
              class="box woop-shadow dark:woop-shadow-dark hover:woop-shadow-xl hover:dark:woop-shadow-xl-dark relative rounded-md xl:h-[30em] md:h-80 h-64 bg-gray-500 bg-cover bg-no-repeat bg-center cursor-pointer" [style.background-image]="'url(' + project.images[0] + ')'"
              [routerLink]="['/project', project.id]"
      >
          <div class="absolute bottom-0 w-full px-4 py-2 backdrop-blur backdrop-brightness-50 text-white rounded-b-md">
              {{ project.name }}
          </div>
      </div>
  `,
  styles: [`
    .box {
      aspect-ratio: 1;
      transition: 300ms;
      transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
      &:hover {
        scale: 1.05;
        z-index: 99;
      }
    }
  `]
})
export class ProjectBoxComponent {
  @Input() project: Project = {categoryId: 0, description: "", id: 0, images: [], name: ""};
}
