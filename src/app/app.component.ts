import {Component, HostListener} from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import {Router, RouterOutlet} from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent],
  template: `
    <div class="h-full w-screen bg-main dark:bg-dark overflow-hidden relative">
        <div class="relative">
            <div class="back-icon z-20 absolute ml-20 mt-20" *ngIf="!isHomePage()" tabindex="1" (click)="goBack()" (keydown)="onBackKeydown($event)" aria-label="Back button">
                <span class="material-symbols-rounded" style="font-size: 4em">
                    chevron_left
                </span>
            </div>
            <div class="w-screen overflow-x-auto z-10 relative">
                <router-outlet></router-outlet>
            </div>
            <div class="fixed top-4 sm:top-auto sm:bottom-0 z-10">
                <app-footer></app-footer>
            </div>
        </div>
        <div class="ball-bg dark:ball-bg-dark absolute path1"></div>
        <div class="ball-bg dark:ball-bg-dark absolute path2"></div>
    </div>
  `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  constructor(private location: Location, private router: Router) {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    };
    window.addEventListener('resize', appHeight);
    appHeight();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;

    if (event.key === 'Backspace' && !isInput && !this.isHomePage()) {
      this.goBack();
      event.preventDefault();
    }
  }

  isHomePage() {
    return (this.router.url === '/' || this.router.url === '/home');
  }

  goBack() {
    console.log("Back");
    this.location.back();
  }

  onBackKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.goBack();
      event.preventDefault();
    }
  }
}
