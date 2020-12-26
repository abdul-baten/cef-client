import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private readonly messageService: MessageService) {}

  showSuccess(summary: string): void {
    if (summary) {
      this.messageService.add({
        severity: 'success',
        summary
      });
    }
  }

  showInfo(message: string): void {
    if (message) {
      this.messageService.add({
        detail: message,
        severity: 'info',
        summary: 'Yay!'
      });
    }
  }

  showWarn(message: string): void {
    if (message) {
      this.messageService.add({
        detail: message,
        severity: 'warn',
        summary: 'Yay!'
      });
    }
  }

  showError(summary: string): void {
    if (summary) {
      this.messageService.add({
        severity: 'error',
        summary
      });
    }
  }
}
