import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)},
  { path: 'category/:id', loadComponent: () => import('./pages/category/category.component').then(c => c.CategoryComponent)},
  { path: 'project', loadComponent: () => import('./pages/project/project.component').then(c => c.ProjectComponent)},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
