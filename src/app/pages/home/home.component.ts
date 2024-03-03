import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "../../components/container/container.component";
import { Section } from "../../models/Section";
import {HorizontalScrollDirective} from "../../shared/directives/horizontal-scroll.directive";
import {HttpClient, HttpClientModule} from "@angular/common/http";

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
  sections: Section[] = []

  constructor(private http: HttpClient) {
    this.http.get<any>('/assets/db.json').subscribe(data => {
      this.sections = data.sections;
    });
  }

}
