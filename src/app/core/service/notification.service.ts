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

  showInfo(detail: string): void {
    if (detail) {
      this.messageService.add({
        detail,
        severity: 'info',
        summary: 'Yay!'
      });
    }
  }

  showWarn(detail: string): void {
    if (detail) {
      this.messageService.add({
        detail,
        severity: 'warn',
        summary: 'Yay!'
      });
    }
  }

  showError(detail: string): void {
    if (detail) {
      this.messageService.add({
        detail,
        severity: 'error',
        summary: 'Error'
      });
    }
  }
}
