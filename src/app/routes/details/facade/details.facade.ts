import { ConfirmationService } from 'primeng/api';
import { IAccount, IProduct } from 'src/app/models';
import { Injectable } from '@angular/core';
import { noop, Observable, Subscription } from 'rxjs';
import { ProductService } from 'src/app/core/service/product.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UserService } from 'src/app/core/service';

@Injectable()
export class DetailsFacade {
  constructor(
    private readonly confirmationService: ConfirmationService,
    private readonly productService: ProductService,
    private readonly router: Router,
    private readonly userService: UserService
  ) {
  }

  public addCart(): Subscription {
    return this.userService.entities$.pipe(tap((accounts: IAccount[]) => {
      const account = Boolean(accounts.length);

      if (!account) {
        this.openConfirm();
      }
    })).subscribe(noop);
  }

  private openConfirm(): void {
    this.confirmationService.confirm({
      accept: () => {
        this.router.navigate(['signin']);
      },
      key: 'signinConfirm',
      message: 'You need to sign in first to add product.'
    });
  }

  public getProductById(id: number): Observable<IProduct> {
    return this.productService.getProductFromState(id);
  }

  public navigate(id: number): void {
    this.router.navigate(['details', id]);
  }
}
