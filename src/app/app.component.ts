import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent],
  template: `

    <div class="h-screen w-screen bg-main dark:bg-dark overflow-hidden relative">
        <div class="relative">
            <div class="h-screen w-screen overflow-x-auto z-10 relative">
                <router-outlet></router-outlet>
            </div>
            <div class="fixed bottom-0 z-10">
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
  title = 'portfolio-fe';
}
