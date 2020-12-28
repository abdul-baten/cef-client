import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/models';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends EntityCollectionServiceBase<IProduct | IProduct[]> {
  constructor(private readonly httpService: HttpService, public serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('product', serviceElementsFactory);
  }

  public getProducts(): Observable<IProduct[]> {
    return this.httpService.get<IProduct[]>('product').pipe(tap((products: IProduct[]) => {
      this.upsertManyInCache(products);
    }));
  }

  public getProductFromState(id: string): Observable<IProduct> {
    // eslint-disable-next-line no-extra-parens
    return this.entities$.pipe(map((products) => products.find((product) => (product as IProduct).id === id))) as unknown as Observable<IProduct>;
  }

  public getProductFromServer(id: string): Observable<IProduct> {
    return this.httpService.get<IProduct>(`product/${id}`).pipe(tap((product: IProduct) => {
      this.upsertOneInCache(product);
    }));
  }
}
