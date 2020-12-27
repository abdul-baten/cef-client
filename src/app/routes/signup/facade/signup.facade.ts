import { AuthService } from 'src/app/core/service/auth.service';
import { IAccount } from 'src/app/models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class SignupFacade {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  public navigate(route: string): void {
    this.router.navigate([route]);
  }

  public registerUser(user: Partial<IAccount>): Observable<Partial<IAccount>> {
    return this.authService.register(user);
  }

  public navigateToDashboard(): void {
    this.navigate('/');
  }
}
