import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Content} from "../../models/Content";

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div class="relative rounded-md xl:h-60 md:h-40 h-32 bg-gray-500 bg-cover bg-no-repeat bg-center {{content.size}}" [style.background-image]="'url(' + content.image + ')'">
          <div class="absolute bottom-0 w-full px-4 py-2 backdrop-blur backdrop-brightness-50 text-white rounded-b-md">
              {{ content.name }}
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
  `]
})
export class BoxComponent {
  @Input() content: Content = {id: 0, image: "", name: "", size: ""};
}
