import { EHttpResponse } from '../enum';
import { environment } from 'src/environments/environment';
import { finalize, tap } from 'rxjs/operators';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { levels } from 'loglevel';
import { LoggerService } from '../service';
import { Observable } from 'rxjs';

const { production } = environment;

@Injectable({
  providedIn: 'root'
})
export class LoggerInterceptor implements HttpInterceptor {
  constructor(private readonly loggerService: LoggerService) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const request_start = Date.now();
    let response_status: string;
    let response_body = '';

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            response_status = EHttpResponse.SUCCEEDED;
            response_body = event.body ? event.body : '';
          }
        },
        () => {
          response_status = EHttpResponse.FAILED;
        }
      ),
      finalize(() => {
        const request_end_time = Date.now() - request_start;
        const message = `[${response_status}] => ${request.method} "${request.urlWithParams}" in ${request_end_time} ms`;

        switch (production) {
        case false:
          if (response_status === EHttpResponse.SUCCEEDED) {
            this.loggerService.logApiResponse(levels.INFO, message, response_body);
          } else {
            this.loggerService.logApiResponse(levels.ERROR, message);
          }
          break;

        default:
          break;
        }
      })
    );
  }
}
