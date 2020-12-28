import { Component } from '@angular/core';
import { HeaderFacade } from '../facade/header.facade';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public isLoggedIn: Observable<boolean>;
  public cart: Observable<number>;

  constructor(private readonly facade: HeaderFacade) {
    this.isLoggedIn = this.facade.getUserFromState().pipe(map((accounts) => Boolean(accounts[0]?.email)));
    this.cart = this.facade.getUserFromState().pipe(map((accounts) => accounts[0]?.products?.length ?? 0));
  }

  navigate(route: string): void {
    this.facade.navigate(route);
  }

  public logout(): void {
    this.facade.logout().subscribe(() => {
      this.facade.reload('/');
    });
  }
}
