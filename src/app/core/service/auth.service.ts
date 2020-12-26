import jsSHA from 'jssha';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { IAccount } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpService: HttpService) {}

  private getPasswordHash(password: string): string {
    const sha_obj = new jsSHA('SHA-256', 'TEXT', { encoding: 'UTF8' });

    sha_obj.update(password);
    const hash = sha_obj.getHash('HEX');

    return hash;
  }

  login(email: string, pass: string): Observable<Partial<IAccount>> {
    const password = this.getPasswordHash(pass);

    return this.httpService.post<Partial<IAccount>>('login', {
      email,
      password
    });
  }
}
