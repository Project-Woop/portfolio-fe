import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Category} from "../../models/Category";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
      <div
              class="box woop-shadow dark:woop-shadow-dark hover:woop-shadow-xl hover:dark:woop-shadow-xl-dark relative rounded-md xl:h-60 md:h-40 h-32 bg-gray-500 bg-cover bg-no-repeat bg-center cursor-pointer {{category.size}}" [style.background-image]="'url(' + category.image + ')'"
              [routerLink]="['/category', category.id]" (keydown)="onKeydown($event)"
      >
          <div class="absolute bottom-0 w-full px-4 py-2 backdrop-blur backdrop-brightness-50 text-white rounded-b-md">
              {{ category.name }}
          </div>
      </div>
  `,
  styles: [`
    .small {
      aspect-ratio: 1;
    }
    .large {
      aspect-ratio: 2.05;
    }

    .box {
      transition: 300ms;
      transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
      &:hover {
        scale: 1.05;
        z-index: 99;
      }
      &:focus {
        border: 10px solid;
      }
    }
  `]
})
export class BoxComponent {
  @Input() category: Category = {id: 0, image: "", name: "", size: ""};

  constructor(private router: Router) {}

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.router.navigate(['/category', this.category.id]);
    }
  }


}
