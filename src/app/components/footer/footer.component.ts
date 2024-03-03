import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
      <div class="footer-grid sm:px-20 px-8 py-2 w-screen">
          <div class="hidden sm:flex flex-row justify-start items-center pointer-events-none">
              © Project Woop - 2024
          </div>
          <div class="flex flex-col gap-1 justify-center items-center" [routerLink]="['/home']">
              <img src="assets/images/svg/logo.svg" class="logo pointer-events-none svg-primary dark:svg-primary-dark" alt="Woop logo">
              <div class="hidden text-xl sm:block pointer-events-none">Woop</div>
          </div>
          <div class="flex flex-row gap-4 justify-end items-center">
              <a href="https://www.instagram.com/project.woop/">
                <img src="assets/images/svg/instagram.svg" class="social svg-primary dark:svg-primary-dark" alt="instagram">
              </a>
              <a href="https://www.behance.net/vincenzolomuscio">
                  <img src="assets/images/svg/behance.svg" class="social svg-primary dark:svg-primary-dark" alt="behance">
              </a>
              <a href="https://www.linkedin.com/in/vincenzo-lomuscio-942815170/">
                <img src="assets/images/svg/linkedin.svg" class="social svg-primary dark:svg-primary-dark" alt="linkedin">
              </a>
              <a href="mailto:vincenzo@projectwoop.it">
                  <img src="assets/images/svg/mail.svg" class="social svg-primary dark:svg-primary-dark" alt="email">
              </a>
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

    @media (max-width: 640px){
      .footer-grid {
        display: grid;
        grid-template-columns: 4em 1fr;
        grid-template-rows: 1fr;
      }
    }

  `]
})
export class FooterComponent {

}
