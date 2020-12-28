import { ConfirmationService } from 'primeng/api';
import { first, tap } from 'rxjs/operators';
import { IAccount, IProduct } from 'src/app/models';
import { Injectable } from '@angular/core';
import { noop, Observable, Subscription } from 'rxjs';
import { ProductService } from 'src/app/core/service/product.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/service';

@Injectable()
export class DetailsFacade {
  private subscriptions$ = new Subscription();

  constructor(
    private readonly confirmationService: ConfirmationService,
    private readonly productService: ProductService,
    private readonly router: Router,
    private readonly userService: UserService
  ) {
  }

  public getSubs(): Subscription {
    return this.subscriptions$;
  }

  public addCart(product: string): void {
    this.subscriptions$.add(this.userService.entities$.pipe(tap((accounts: IAccount[]) => {
      const account = Boolean(accounts.length);

      if (account) {
        this.add(accounts[0].id, product);
      } else {
        this.openConfirm();
      }
    })).subscribe(noop));
  }

  private add(id: string, product: string): void {
    this.userService.addProduct(id, product).pipe(tap(() => {
      this.router.navigate(['checkout']);
    }), first()).
      subscribe(noop);
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

  public getProductById(id: string): Observable<IProduct> {
    return this.productService.getProductFromState(id);
  }

  public navigate(id: number): void {
    this.router.navigate(['details', id]);
  }
}
