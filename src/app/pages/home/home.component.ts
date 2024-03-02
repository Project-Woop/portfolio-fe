import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "../../components/container/container.component";
import { Section } from "../../models/Section";
import {HorizontalScrollDirective} from "../../shared/directives/horizontal-scroll.directive";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContainerComponent, HorizontalScrollDirective],
  template: `
    <div class="h-screen flex flex-row gap-16 px-20 items-center overflow-y-hidden" appHorizontalScroll>
        <ng-container *ngFor="let section of sections">
          <app-container [section]="section" />
        </ng-container>
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent {

  sections: Section[] = [
    {
      id: 1,
      name: "Fields",
      categories: [
        {
          id: 1,
          name: "Industrial Design",
          image: "https://source.unsplash.com/random/?project",
          size: "large"
        },
        {
          id: 2,
          name: "UX Design",
          image: "https://source.unsplash.com/random/?application",
          size: "large"
        },
        {
          id: 3,
          name: "Development",
          image: "https://source.unsplash.com/random/?development",
          size: "large"
        },
        {
          id: 4,
          name: "Teaching",
          image: "https://source.unsplash.com/random/?teaching",
          size: "large"
        }
      ]
    },
    {
      id: 2,
      name: "Software",
      categories: [
        {
          id: 1,
          name: "Webstorm",
          image: "https://source.unsplash.com/random/?webstorm",
          size: "small"
        },
        {
          id: 2,
          name: "IntelliJ",
          image: "https://source.unsplash.com/random/?intellij",
          size: "small"
        },
        {
          id: 3,
          name: "Fusion 360",
          image: "https://source.unsplash.com/random/?inventor",
          size: "large"
        },
        {
          id: 4,
          name: "Android Studio",
          image: "https://source.unsplash.com/random/?android",
          size: "large"
        },
        {
          id: 5,
          name: "Photoshop",
          image: "https://source.unsplash.com/random/?photoshop",
          size: "small"
        },
        {
          id: 6,
          name: "Illustrator",
          image: "https://source.unsplash.com/random/?illustrator",
          size: "small"
        },
        {
          id: 7,
          name: "Figma",
          image: "https://source.unsplash.com/random/?figma",
          size: "small"
        },
        {
          id: 8,
          name: "Adobe XD",
          image: "https://source.unsplash.com/random/?xd",
          size: "small"
        },
        {
          id: 9,
          name: "Keyshot",
          image: "https://source.unsplash.com/random/?render",
          size: "small"
        },
        {
          id: 10,
          name: "InDesign",
          image: "https://source.unsplash.com/random/?indesign",
          size: "small"
        },
        {
          id: 11,
          name: "Blender",
          image: "https://source.unsplash.com/random/?blender",
          size: "small"
        },
        {
          id: 12,
          name: "Premiere Pro",
          image: "https://source.unsplash.com/random/?videoediting",
          size: "small"
        }
      ]
    },
    {
      id: 3,
      name: "Technologies",
      categories: [
        {
          id: 1,
          name: "HTML",
          image: "https://source.unsplash.com/random/?html",
          size: "small"
        },
        {
          id: 2,
          name: "JavaScript",
          image: "https://source.unsplash.com/random/?javascript",
          size: "small"
        },
        {
          id: 3,
          name: "CSS",
          image: "https://source.unsplash.com/random/?css",
          size: "small"
        },
        {
          id: 4,
          name: "TypeScript",
          image: "https://source.unsplash.com/random/?typescript",
          size: "large"
        },
        {
          id: 5,
          name: "Flutter",
          image: "https://source.unsplash.com/random/?flutter",
          size: "large"
        },
        {
          id: 6,
          name: "NestJS",
          image: "https://source.unsplash.com/random/?server",
          size: "small"
        },
        {
          id: 7,
          name: "Angular",
          image: "https://source.unsplash.com/random/?angular",
          size: "small"
        },
        {
          id: 8,
          name: "Spring",
          image: "https://source.unsplash.com/random/?spring",
          size: "large"
        },
        {
          id: 9,
          name: "React",
          image: "https://source.unsplash.com/random/?react",
          size: "small"
        }
      ]
    }
  ]

}
