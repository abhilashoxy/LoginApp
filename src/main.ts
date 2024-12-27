import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/interceptors/auth.interceptor';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';


const routes = [
  { path: '', component: HomeComponent }, // Default route
  {
    path: 'login',
    loadComponent: () =>
      import('./app/pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'registeredusers',
    loadComponent: () =>
      import('./app/pages/registered-users/registered-users.component').then((m) => m.RegisteredUsersComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./app/pages/register-user/register-user.component').then(
        (m) => m.RegisterUserComponent
      ),
  },
  { path: '**', redirectTo: '' }, // Wildcard route redirects to the home page
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
}).catch((err) => console.error(err));
