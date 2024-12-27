import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'registeredusers',
    loadComponent: () =>
      import('../app/pages/registered-users/registered-users.component').then((m) => m.RegisteredUsersComponent),
  },
  { path: '**', redirectTo: '' }, // Wildcard route redirects to the home page
];
