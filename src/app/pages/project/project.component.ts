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
      <div class="h-screen-responsive overflow-y-hidden flex flex-col justify-center gap-2 px-20" appHorizontalScroll>
          <h2 class="sticky ml-4 text-2xl font-bold">
              {{ project.name }}
          </h2>
          <div class="flex flex-row gap-2 items-center">
              <p class="aspect-[2] columns-2 xl:columns-1 xl:aspect-square xl:h-[30em] md:h-80 h-64" style="font-family: Poppins">
                  {{ project.description }}
              </p>
              <ng-container *ngFor="let image of project.images; let i = index">
                  <img src="{{ image }}" class="image woop-shadow dark:woop-shadow-dark hover:woop-shadow-xl hover:dark:woop-shadow-xl-dark relative rounded-md xl:h-[30em] md:h-80 h-64 object-cover" alt="image of {{project.name}} number {{i}}">
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
      &:focus {
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
