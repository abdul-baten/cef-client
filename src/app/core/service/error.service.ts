import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(private readonly notificationService: NotificationService) { }

  public handleClientError(error: Error): void {
    console.error(error);
  }

  public handleServerError(error: HttpErrorResponse): void {
    const { message } = error.error;

    this.notificationService.showError(message);
  }
}
