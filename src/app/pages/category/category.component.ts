import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { HorizontalScrollDirective } from "../../shared/directives/horizontal-scroll.directive";
import { ProjectBoxComponent } from "../../components/project/project-box.component";
import { Category } from "../../models/Category";
import { HttpClient } from "@angular/common/http";
import { Project } from "../../models/Project";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, HorizontalScrollDirective, ProjectBoxComponent],
  template: `
    <div class="h-screen-responsive overflow-y-hidden flex flex-col justify-center gap-2 px-20" appHorizontalScroll>
        <div class="sticky ml-4 text-2xl font-bold">
            {{ category?.name }}
        </div>
        <div class="flex flex-row gap-2 items-center">
            <div #descriptionContainer class="flex-shrink-0 xl:h-[30em] md:h-80 h-64">
                <p #descriptionParagraph class="h-full" style="font-family: Poppins,serif;">
                    {{ category?.description }}
                </p>
            </div>
            <ng-container *ngFor="let project of projects; let i = index">
                <app-project-box [project]="project"></app-project-box>
            </ng-container>
        </div>
    </div>
  `,
  styles: [`
  `]
})
export class CategoryComponent implements AfterViewInit, OnDestroy {
  category: Category | undefined;
  projects: Project[] = [];

  private viewInitialized = false;
  private resizeTimeout: any;

  @ViewChild('descriptionContainer') descriptionContainer: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('descriptionParagraph') descriptionParagraph: ElementRef<HTMLParagraphElement> | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient, private renderer: Renderer2) {
    const categoryId = this.route.snapshot.paramMap.get('id') || 0;
    this.http.get<any>('/assets/db.json').subscribe(data => {
      this.projects = data.projects.filter((p: Project) => p.categoryId == +categoryId);
      this.category = data.categories.find((c: Category) => c.id == +categoryId);

      if (this.viewInitialized) {
        setTimeout(() => this.adjustDescriptionWidth(), 0);
      }
    });
  }

  ngAfterViewInit(): void {
    this.viewInitialized = true;
    if (this.category) {
      this.adjustDescriptionWidth();
    }
  }

  @HostListener('window:resize')
  onResize() {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => this.adjustDescriptionWidth(), 100);
  }

  ngOnDestroy(): void {
    clearTimeout(this.resizeTimeout);
  }

  private adjustDescriptionWidth(): void {
    const container = this.descriptionContainer?.nativeElement;
    const p = this.descriptionParagraph?.nativeElement;
    if (!container || !p || !this.category?.description) return;

    this.renderer.setStyle(container, 'width', null);
    this.renderer.setStyle(p, 'column-width', null);
    this.renderer.setStyle(p, 'column-fill', null);

    const availableHeight = container.clientHeight;
    if (availableHeight === 0) return;

    const clone = this.renderer.createElement('div');
    const pStyles = window.getComputedStyle(p);

    this.renderer.setStyle(clone, 'position', 'absolute');
    this.renderer.setStyle(clone, 'visibility', 'hidden');
    this.renderer.setStyle(clone, 'width', '25ch');
    this.renderer.setStyle(clone, 'font', pStyles.font);
    this.renderer.setStyle(clone, 'letter-spacing', pStyles.letterSpacing);

    clone.innerHTML = this.category.description;
    this.renderer.appendChild(document.body, clone);

    const totalTextHeight = clone.scrollHeight;
    const columnWidthInPx = clone.clientWidth;
    const oneEmInPx = parseFloat(pStyles.fontSize);

    this.renderer.removeChild(document.body, clone);

    const numColumns = Math.ceil(totalTextHeight / availableHeight);
    if (numColumns <= 0) return;

    const columnGapInPx = oneEmInPx;
    const requiredWidth = (numColumns * columnWidthInPx) + ((numColumns - 1) * columnGapInPx);

    this.renderer.setStyle(container, 'width', requiredWidth + 'px');
    this.renderer.setStyle(p, 'column-width', '25ch');
    this.renderer.setStyle(p, 'column-fill', 'auto');
  }
}
