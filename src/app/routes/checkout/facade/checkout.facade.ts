import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/service';

@Injectable()
export class CheckoutFacade {
  constructor(private readonly userService: UserService) {
  }

  public getProducts(): Observable<IProduct[]> {
    return this.userService.getUserFromState().pipe(map((account) => account.products ?? []));
  }
}
