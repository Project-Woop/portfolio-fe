import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { ContainerComponent } from "../../components/container/container.component";
import { HorizontalScrollDirective } from "../../shared/directives/horizontal-scroll.directive";
import { Project } from "../../models/Project";
import { ProjectBoxComponent } from "../../components/project/project-box.component";
import { Category } from "../../models/Category";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, ContainerComponent, HorizontalScrollDirective, RouterLink, ProjectBoxComponent],
  template: `
    <div class="h-screen-responsive overflow-y-hidden flex flex-col justify-center gap-2 px-20" appHorizontalScroll>
        <div class="sticky ml-4 text-2xl" tabindex="1">
            {{ category?.name }}
        </div>
        <div class="flex flex-row gap-2 items-center" tabindex="2">
            <div class="aspect-[2] columns-2 xl:columns-1 xl:aspect-square xl:h-[30em] md:h-80 h-64">
                {{ category?.description }}
            </div>
            <ng-container *ngFor="let project of projects; let i = index" tabindex="3">
                <app-project-box [project]="project"></app-project-box>
            </ng-container>
        </div>
    </div>
  `,
  styles: [`
  `]
})
export class CategoryComponent {
  category: Category | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    const categoryId = this.route.snapshot.paramMap.get('id') || 0;
    this.http.get<any>('/assets/db.json').subscribe(data => {
      this.category = data.categories.find((c: Category) => c.id == +categoryId);
      this.projects = data.projects.filter((p: Project) => p.categoryId == +categoryId);
    });
  }

  projects: Project[] = [];
  categories: Category[] = [];

}
