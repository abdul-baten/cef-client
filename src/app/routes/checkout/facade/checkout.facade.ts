import { IAccount, IProduct } from 'src/app/models';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/service';

@Injectable()
export class CheckoutFacade {
  constructor(private readonly userService: UserService) {
  }

  public getProducts(): Observable<IProduct[]> {
    return this.userService.entities$.pipe(map((accounts) => accounts[0]?.products ?? []));
  }

  public remove(product: string): Observable<IProduct[]> {
    return this.userService.removeProduct(product).pipe(map((account) => account.products ?? []));
  }

  public getUserFromState(): Observable<IAccount[]> {
    return this.userService.entities$;
  }
}
