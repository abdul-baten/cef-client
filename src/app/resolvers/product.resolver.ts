import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import {
  catchError,
  first,
  map,
  switchMap
} from 'rxjs/operators';
import { ErrorService } from '../core/service';
import { Injectable } from '@angular/core';
import { IProduct } from '../models';
import { Observable, of, throwError } from 'rxjs';
import { ProductService } from '../core/service/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<IProduct> {
  constructor(
    private readonly errorService: ErrorService,
    private readonly productService: ProductService,
    private readonly router: Router
  ) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<IProduct> {
    const id = route.paramMap.get('id') as string;
    const product_from_state$ = this.productService.getProductFromState(id);
    const product_from_server$ = this.productService.getProductFromServer(id).pipe(map((product: IProduct) => product));

    return product_from_state$.pipe(
      switchMap((product: IProduct) => {
        if (product) {
          return of(product);
        }

        return product_from_server$;
      }),
      first(),
      catchError((error) => {
        this.errorService.handleServerError(error);
        this.router.navigate(['/']);

        return throwError(error);
      })
    );
  }
}
