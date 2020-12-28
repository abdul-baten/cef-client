import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  first,
  mergeAll,
  switchMap,
  take,
  tap
} from 'rxjs/operators';
import { HttpService } from './http.service';
import { IAccount } from 'src/app/models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends EntityCollectionServiceBase<IAccount> {
  constructor(private readonly httpService: HttpService, public serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('account', serviceElementsFactory);
  }

  public getUserFromState(): Observable<IAccount> {
    return this.entities$.pipe(mergeAll(), take(1), first());
  }

  public addUserToState(user: IAccount): void {
    this.upsertOneInCache(user);
  }

  public addProduct(product: string): Observable<Partial<IAccount>> {
    return this.getUserFromState().pipe(switchMap(({ id }: IAccount) => this.httpService.patch('add', {
      id,
      product
    }).pipe(tap((account) => {
      this.updateOneInCache(account);
    }))));
  }

  public removeProduct(product: string): Observable<Partial<IAccount>> {
    return this.getUserFromState().pipe(switchMap(({ id }: IAccount) => this.httpService.patch('remove', {
      id,
      product
    }).pipe(tap((account) => {
      this.updateOneInCache(account, { isOptimistic: true });
    }))));
  }
}
