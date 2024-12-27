import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router,private toastService: ToastService) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        this.toastService.showToast('success', 'Login Successful', 'Welcome back!');
        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/']);
      },
      (error) => {
        this.toastService.showToast('error', 'Login Failed', 'Invalid credentials.');
      }
    );
  }
}
