import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.scss'],
  standalone: true,
  imports: [CommonModule], // Import CommonModule here
})
export class RegisteredUsersComponent implements OnInit {
  users: any[] = [];
  loading = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.fetchRegisteredUsers();
  }

  fetchRegisteredUsers(): void {
    this.authService.getRegisteredUsers().subscribe({
      next: (data) => {
        this.users = data; // Assuming the API returns a list of users
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
        this.loading = false;
      },
    });
  }
}
