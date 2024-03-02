import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContainerComponent} from "../../components/container/container.component";
import {Section} from "../../models/Section";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContainerComponent],
  template: `
    <div class="h-screen flex flex-row gap-16 px-20 items-center">
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
      contents: [
        {
          id: 1,
          name: "Industrial Design",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "large"
        },
        {
          id: 2,
          name: "UX Design",
          image: "https://images.unsplash.com/photo-1709041976630-2c1ee438a941",
          size: "large"
        },
        {
          id: 3,
          name: "Development",
          image: "https://images.unsplash.com/photo-1709041976630-2c1ee438a941",
          size: "large"
        },
        {
          id: 4,
          name: "Teaching",
          image: "https://images.unsplash.com/photo-1709041976630-2c1ee438a941",
          size: "large"
        }
      ]
    },

    {
      id: 2,
      name: "Software",
      contents: [
        {
          id: 1,
          name: "Webstorm",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "small"
        },
        {
          id: 2,
          name: "IntelliJ",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "small"
        },
        {
          id: 3,
          name: "Fusion 360",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "large"
        },
        {
          id: 4,
          name: "Android Studio",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "large"
        },
        {
          id: 5,
          name: "Photoshop",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "small"
        },
        {
          id: 6,
          name: "Illustrator",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "small"
        },
        {
          id: 7,
          name: "Figma",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "small"
        },
        {
          id: 8,
          name: "Adobe XD",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "small"
        },
        {
          id: 9,
          name: "Keyshot",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "small"
        },
        {
          id: 10,
          name: "InDesign",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "small"
        },
        {
          id: 11,
          name: "Blender",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "small"
        },
        {
          id: 12,
          name: "Premiere Pro",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "small"
        }
      ]
    },

    {
      id: 3,
      name: "Technologies",
      contents: [
        {
          id: 1,
          name: "HTML",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "small"
        },
        {
          id: 2,
          name: "JavaScript",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "small"
        },
        {
          id: 3,
          name: "CSS",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "small"
        },
        {
          id: 4,
          name: "TypeScript",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "large"
        },
        {
          id: 5,
          name: "Flutter",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "large"
        },
        {
          id: 6,
          name: "NestJS",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "small"
        },
        {
          id: 7,
          name: "Angular",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "small"
        },
        {
          id: 8,
          name: "Spring",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "large"
        },
        {
          id: 9,
          name: "React",
          image: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae",
          size: "small"
        }
      ]
    }
  ]

}
