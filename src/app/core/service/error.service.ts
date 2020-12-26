import { HttpErrorResponse } from '@angular/common/http';
import { IError } from 'src/app/models/error.model';
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
    console.error(error);

    this.serverError(error.error);
  }

  private serverError(error: IError): void {
    const { message } = error;

    this.notificationService.showError(message);
  }
}
