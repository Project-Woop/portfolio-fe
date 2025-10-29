import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Project } from "../../models/Project";
import { HorizontalScrollDirective } from "../../shared/directives/horizontal-scroll.directive";
import { ProjectBoxComponent } from "../../components/project/project-box.component";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, HorizontalScrollDirective],
  template: `
      <div class="h-screen-responsive overflow-y-hidden flex flex-col justify-center gap-2 px-20" appHorizontalScroll>
          <h2 class="sticky ml-4 text-2xl font-bold">
              {{ project?.name }}
          </h2>
          <div class="flex flex-row gap-2 items-center">
              <div #descriptionContainer class="flex-shrink-0 xl:h-[30em] md:h-80 h-64">
                  <p #descriptionParagraph class="h-full" style="font-family: Poppins,serif;">
                      {{ project?.description }}
                  </p>
              </div>
              <ng-container *ngFor="let image of project?.images; let i = index">
                  <img src="{{ image }}" class="image woop-shadow dark:woop-shadow-dark hover:woop-shadow-xl hover:dark:woop-shadow-xl-dark relative rounded-md xl:h-[30em] md:h-80 h-64 object-cover" alt="image of {{project?.name}} number {{i}}">
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
export class ProjectComponent implements AfterViewInit, OnDestroy {
  private _project: Project | undefined;
  get project(): Project | undefined {
    return this._project;
  }
  set project(value: Project | undefined) {
    this._project = value;
    if (this.viewInitialized) {
      setTimeout(() => this.adjustDescriptionWidth(), 0);
    }
  }

  private viewInitialized = false;
  private resizeTimeout: any;

  @ViewChild('descriptionContainer') descriptionContainer: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('descriptionParagraph') descriptionParagraph: ElementRef<HTMLParagraphElement> | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient, private renderer: Renderer2) {
    const projectId = this.route.snapshot.paramMap.get('id') || 0;
    this.http.get<any>('/assets/db.json').subscribe(data => {
      this.project = data.projects.find((p: Project) => p.id == +projectId);
    });
  }

  ngAfterViewInit(): void {
    this.viewInitialized = true;
    if (this.project) {
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
    if (!container || !p || !this.project?.description) return;

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

    clone.innerHTML = this.project.description;
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
