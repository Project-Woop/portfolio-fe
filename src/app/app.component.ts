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
      this.location.back();
      event.preventDefault();
    }
  }

  private isHomePage() {
    return (this.router.url === '/' || this.router.url === '/home');
  }
}
