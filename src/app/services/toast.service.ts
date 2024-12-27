import { Injectable } from '@angular/core';
import { ToastComponent } from '../components/common/toast/toast.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastComponent: ToastComponent | null = null;

  setToastComponent(toastComponent: ToastComponent) {
    this.toastComponent = toastComponent;
  }

  showToast(type: 'success' | 'error' | 'info', title: string, message: string) {
    this.toastComponent?.showToast(type, title, message);
  }
}
