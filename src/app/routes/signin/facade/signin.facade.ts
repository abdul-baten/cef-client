import { AuthService } from 'src/app/core/service/auth.service';
import { IAccount } from 'src/app/models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UserService } from 'src/app/core/service/user.service';

@Injectable()
export class SigninFacade {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  public navigate(route: string): void {
    this.router.navigate([route]);
  }

  public loginUser(email: string, password: string): Observable<Partial<IAccount>> {
    return this.authService.login(email, password).pipe(tap((user: Partial<IAccount>) => this.userService.addUserToState(user as IAccount)));
  }

  public navigateToDashboard(): void {
    this.navigate('/');
  }
}
