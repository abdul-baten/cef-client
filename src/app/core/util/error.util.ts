import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorService } from '../service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerUtil implements ErrorHandler {
  constructor(private readonly errorService: ErrorService) {}

  public handleError(error: Error | HttpErrorResponse): void {
    if (error instanceof Error) {
      this.errorService.handleClientError(error);
    }
  }
}
