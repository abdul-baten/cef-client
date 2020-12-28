import { Component } from '@angular/core';
import { HeaderFacade } from '../facade/header.facade';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public isLoggedIn: Observable<boolean> = of(false);

  constructor(private readonly facade: HeaderFacade) {
    this.isLoggedIn = this.facade.getUserFromState().pipe(map((account) => Boolean(account.email)));
  }

  navigate(route: string): void {
    this.facade.navigate(route);
  }
}
