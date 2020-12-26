import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

const { baseUrl: base_url } = environment;

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private readonly httpClient: HttpClient) {}

  public get<T>(uri: string, params?: Record<string, string>): Observable<T> {
    return this.httpClient.
      get<T>(base_url + uri, {
        params: { ...params } as unknown as HttpParams
      }).
      pipe(shareReplay(1));
  }

  public post<T>(uri: string, post_info: unknown): Observable<T> {
    return this.httpClient.post<T>(base_url + uri, post_info).pipe(shareReplay(1));
  }

  public patch<T>(uri: string, post_info: T): Observable<T> {
    return this.httpClient.patch<T>(base_url + uri, post_info).pipe(shareReplay(1));
  }

  public delete<T>(uri: string): Observable<T> {
    return this.httpClient.
      delete<T>(base_url + uri).
      pipe(shareReplay(1));
  }
}
