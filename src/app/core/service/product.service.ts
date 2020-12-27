import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/models';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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

  public getProductById(id: number): Observable<IProduct> {
    // eslint-disable-next-line no-extra-parens
    return this.entities$.pipe(map((products) => products.find((product) => (product as IProduct).id === id))) as unknown as Observable<IProduct>;
  }
}
