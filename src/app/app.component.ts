import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ToastComponent } from './components/common/toast/toast.component';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterModule, ToastComponent],
  template: `
    <app-navbar></app-navbar>
    <app-toast></app-toast>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;

  constructor(private toastService: ToastService) {}

  ngAfterViewInit() {
    this.toastService.setToastComponent(this.toastComponent);
  }
}
