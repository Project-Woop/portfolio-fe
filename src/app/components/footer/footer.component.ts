import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div class="footer-grid sm:px-20 px-2 py-2 w-screen">
          <div class="flex flex-row justify-start items-center pointer-events-none">
<!--              © Project Woop - 2024-->
          </div>
          <div class="flex flex-col gap-1 justify-center items-center">
              <img src="assets/images/svg/logo.svg" class="logo pointer-events-none svg-primary dark:svg-primary-dark">
              <div class="font-bold pointer-events-none">Woop</div>
          </div>
          <div class="flex flex-row gap-4 justify-end items-center">
<!--              <img src="assets/images/svg/instagram.svg" class="social svg-primary dark:svg-primary-dark">-->
<!--              <img src="assets/images/svg/behance.svg" class="social svg-primary dark:svg-primary-dark">-->
<!--              <img src="assets/images/svg/linkedin.svg" class="social svg-primary dark:svg-primary-dark">-->
<!--              <img src="assets/images/svg/mail.svg" class="social svg-primary dark:svg-primary-dark">-->
          </div>
      </div>

  `,
  styles: [`
    .footer-grid {
      display: grid;
      grid-template-columns: 1fr 4em 1fr;
      grid-template-rows: 1fr;
    }

    .logo {
      height: 3em;
    }

    .social {
      height: 1.4em;
      opacity: 0.8;
      transition: 300ms;
      &:hover {
        opacity: 1;
        scale: 1.05;
      }
    }
  `]
})
export class FooterComponent {

}
