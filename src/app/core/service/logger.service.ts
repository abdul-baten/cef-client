import dayJs from 'dayjs';
import {
  error,
  info,
  levels,
  setLevel
} from 'loglevel';
import { Injectable } from '@angular/core';
import { IUiError } from 'src/app/models/error.model';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

setLevel(levels.INFO);

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private errorDateTime = dayJs().toISOString();

  constructor(private readonly locationStrategy: LocationStrategy) {}

  public logUiError(main_error: Error, error_component: string, error_line_number: string, error_column_number: string): void {
    const { message: error_message } = main_error;
    const location = this.locationStrategy;
    const error_url = location instanceof PathLocationStrategy ? location.path() : '';
    const error_object: IUiError = {
      error_column_number,
      error_component,
      error_line_number,
      error_message,
      error_time: this.errorDateTime,
      error_url
    };

    error('[ERROR]', this.errorDateTime, error_message, error_object);
  }

  public logApiResponse(log_level: number, ...message: unknown[]): void {
    switch (log_level) {
    case levels.INFO:
      info('[INFO]', ...message);
      break;

    case levels.ERROR:
      error('[ERROR]', ...message);
      break;

    default:
      break;
    }
  }
}
