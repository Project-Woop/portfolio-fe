import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ContainerComponent} from "../../components/container/container.component";
import {HorizontalScrollDirective} from "../../shared/directives/horizontal-scroll.directive";
import {Project} from "../../models/Project";
import {ProjectBoxComponent} from "../../components/project/project-box.component";
import {Category} from "../../models/Category";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, ContainerComponent, HorizontalScrollDirective, RouterLink, ProjectBoxComponent],
  template: `
    <div class="h-screen overflow-y-hidden flex flex-col justify-center gap-2 px-20" appHorizontalScroll>
        <div class="sticky ml-4 text-2xl">
            {{ category?.name }}
        </div>
        <div class="flex flex-row gap-2 items-center">
            <div class="brief pr-20 xl:h-[30em] md:h-80 h-64 ">
                {{ category?.description }}
            </div>
            <ng-container *ngFor="let project of projects">
                <app-project-box [project]="project"></app-project-box>
            </ng-container>
        </div>
    </div>
  `,
  styles: [`
    .brief {
      aspect-ratio: 1;
    }
  `]
})
export class CategoryComponent {
  category: Category | undefined;

  constructor(private route: ActivatedRoute,) {
    let categoryId = this.route.snapshot.paramMap.get('id') || 0;
    this.category = this.categories.find(c => c.id == +categoryId)
  }

  projects: Project[] = [
    {
      id: 1,
      name: "SPAZIOTEMPO",
      description: "una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima ",
      categoryId: 1,
      images: [
        "https://source.unsplash.com/random/?spazio",
        "https://source.unsplash.com/random/?tempo",
        "https://source.unsplash.com/random/?einstein",
      ]
    },
    {
      id: 2,
      name: "SPAZIOTEMPO",
      description: "una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima ",
      categoryId: 1,
      images: [
        "https://source.unsplash.com/random/?spazio",
        "https://source.unsplash.com/random/?tempo",
        "https://source.unsplash.com/random/?einstein",
      ]
    },
    {
      id: 3,
      name: "SPAZIOTEMPO",
      description: "una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima ",
      categoryId: 1,
      images: [
        "https://source.unsplash.com/random/?spazio",
        "https://source.unsplash.com/random/?tempo",
        "https://source.unsplash.com/random/?einstein",
      ]
    },
    {
      id: 4,
      name: "SPAZIOTEMPO",
      description: "una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima ",
      categoryId: 1,
      images: [
        "https://source.unsplash.com/random/?spazio",
        "https://source.unsplash.com/random/?tempo",
        "https://source.unsplash.com/random/?einstein",
      ]
    },
    {
      id: 5,
      name: "SPAZIOTEMPO",
      description: "una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima ",
      categoryId: 1,
      images: [
        "https://source.unsplash.com/random/?spazio",
        "https://source.unsplash.com/random/?tempo",
        "https://source.unsplash.com/random/?einstein",
      ]
    },
    {
      id: 6,
      name: "SPAZIOTEMPO",
      description: "una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima ",
      categoryId: 1,
      images: [
        "https://source.unsplash.com/random/?spazio",
        "https://source.unsplash.com/random/?tempo",
        "https://source.unsplash.com/random/?einstein",
      ]
    },
    {
      id: 7,
      name: "SPAZIOTEMPO",
      description: "una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima ",
      categoryId: 1,
      images: [
        "https://source.unsplash.com/random/?spazio",
        "https://source.unsplash.com/random/?tempo",
        "https://source.unsplash.com/random/?einstein",
      ]
    },
    {
      id: 8,
      name: "SPAZIOTEMPO",
      description: "una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima ",
      categoryId: 1,
      images: [
        "https://source.unsplash.com/random/?spazio",
        "https://source.unsplash.com/random/?tempo",
        "https://source.unsplash.com/random/?einstein",
      ]
    },
    {
      id: 9,
      name: "SPAZIOTEMPO",
      description: "una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima ",
      categoryId: 1,
      images: [
        "https://source.unsplash.com/random/?spazio",
        "https://source.unsplash.com/random/?tempo",
        "https://source.unsplash.com/random/?einstein",
      ]
    },
    {
      id: 10,
      name: "SPAZIOTEMPO",
      description: "una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima una collezione bellissima ",
      categoryId: 1,
      images: [
        "https://source.unsplash.com/random/?spazio",
        "https://source.unsplash.com/random/?tempo",
        "https://source.unsplash.com/random/?einstein",
      ]
    },
    {
      id: 11,
      name: "MAMAMAM",
      description: "una collezione mediocre",
      categoryId: 1,
      images: [
        "https://source.unsplash.com/random/?legno",
        "https://source.unsplash.com/random/?tavolo",
        "https://source.unsplash.com/random/?sedia",
      ]
    }
  ];

  categories: Category[] = [
    {
      id: 1,
      name: "Industrial Design",
      description: "I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. ",
      image: "https://source.unsplash.com/random/?project",
      size: "large"
    },
    {
      id: 2,
      name: "UX Design",
      description: "I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. ",
      image: "https://source.unsplash.com/random/?application",
      size: "large"
    },
    {
      id: 3,
      name: "Development",
      description: "I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. ",
      image: "https://source.unsplash.com/random/?development",
      size: "large"
    },
    {
      id: 4,
      name: "Teaching",
      description: "I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. I'm very good at this shit. ",
      image: "https://source.unsplash.com/random/?teaching",
      size: "large"
    }
  ];

}
