import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true, // Add this
  imports: [CommonModule], // Add necessary imports
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent {
  isToastVisible = false;
  toastTitle = '';
  toastMessage = '';
  toastClass = 'text-bg-success';

  // Display the toast
  showToast(type: 'success' | 'error' | 'info', title: string, message: string) {
    this.toastClass = this.getToastClass(type);
    this.toastTitle = title;
    this.toastMessage = message;
    this.isToastVisible = true;

    // Auto-hide after 5 seconds
    setTimeout(() => {
      this.isToastVisible = false;
    }, 5000);
  }

  // Hide the toast manually
  hideToast() {
    this.isToastVisible = false;
  }

  // Determine toast class based on type
  private getToastClass(type: 'success' | 'error' | 'info'): string {
    switch (type) {
      case 'success':
        return 'text-bg-success';
      case 'error':
        return 'text-bg-danger';
      case 'info':
        return 'text-bg-info';
      default:
        return 'text-bg-primary';
    }
  }
}
