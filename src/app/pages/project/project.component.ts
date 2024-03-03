import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Category} from "../../models/Category";
import {Project} from "../../models/Project";
import {HorizontalScrollDirective} from "../../shared/directives/horizontal-scroll.directive";
import {ProjectBoxComponent} from "../../components/project/project-box.component";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, HorizontalScrollDirective, ProjectBoxComponent],
  template: `
      <div class="h-screen overflow-y-hidden flex flex-col justify-center gap-2 px-20" appHorizontalScroll>
          <div class="sticky ml-4 text-2xl">
              {{ project.name }}
          </div>
          <div class="flex flex-row gap-2 items-center">
              <div class="brief pr-20 xl:h-[30em] md:h-80 h-64 ">
                  {{ project.description }}
              </div>
              <ng-container *ngFor="let image of project.images">
                  <img src="{{ image }}" class="image woop-shadow dark:woop-shadow-dark hover:woop-shadow-xl hover:dark:woop-shadow-xl-dark relative rounded-md xl:h-[30em] md:h-80 h-64 object-cover">
              </ng-container>
          </div>
      </div>
  `,
  styles: [`
    .brief {
      aspect-ratio: 1;
    }

    .image {
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
export class ProjectComponent {
  project: Project = {categoryId: 0, description: "", id: 0, images: [], name: ""};

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    const projectId = this.route.snapshot.paramMap.get('id') || 0;
    this.http.get<any>('/assets/db.json').subscribe(data => {
      this.project = data.projects.find((p: Project) => p.id == +projectId);
    });
  }

}
