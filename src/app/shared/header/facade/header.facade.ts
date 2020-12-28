import { AuthService, GlobalService } from 'src/app/core/service';
import { IAccount } from 'src/app/models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { shareReplay } from 'rxjs/operators';
import { UserService } from 'src/app/core/service/user.service';

@Injectable()
export class HeaderFacade {
  constructor(
    private readonly authService: AuthService,
    private readonly globalService: GlobalService,
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  public navigate(route: string): void {
    this.router.navigate([route]);
  }

  public getUserFromState(): Observable<Partial<IAccount>> {
    return this.userService.getUserFromState().pipe(shareReplay());
  }

  public logout(): Observable<Record<string, boolean>> {
    return this.authService.logout();
  }

  public reload(url: string): void {
    this.globalService.getLocation().replace(url);
  }
}
