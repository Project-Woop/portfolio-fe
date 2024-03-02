import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `

    <div class="h-screen w-screen bg-main overflow-hidden relative">
        <div class="relative">
            <div class="h-screen w-screen overflow-x-auto z-10 relative">
                <router-outlet></router-outlet>
            </div>
            <div class="absolute bottom-0 flex justify-center items-center h-20 w-screen z-10">
                woop
            </div>
        </div>
        <div class="ball-bg absolute path1"></div>
        <div class="ball-bg absolute path2"></div>
    </div>
  `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = 'portfolio-fe';
}
