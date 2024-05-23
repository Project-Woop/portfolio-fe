import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoxComponent} from "../box/box.component";
import {Section} from "../../models/Section";


@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule, BoxComponent],
  template: `
      <div class="bg-green-10 flex flex-col gap-2">
          <div class="text-2xl ml-4"> {{ section.name }} </div>
          <div class="box-grid gap-2">
              <ng-container *ngFor="let category of section.categories; let i = index">
                <app-box [attr.tabindex]="i" [category]="category" [ngClass]="{'span': category.size=='large'}"></app-box>
              </ng-container>
          </div>
      </div>
  `,
  styles: [`
    .box-grid {
      display: grid;
      grid-template-rows: repeat(2, auto);
      grid-auto-rows: minmax(min-content, max-content);
      grid-auto-flow: column dense;
      width: max-content;
      height: fit-content;
    }

    .span {
      grid-column: span 2;
    }
  `]
})
export class ContainerComponent {
  @Input() section: Section = {categories: [], id: 0, name: ""};
}
