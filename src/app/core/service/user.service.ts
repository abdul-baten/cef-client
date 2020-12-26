import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import {
  first,
  mergeAll,
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

  public getUser(): Observable<IAccount> {
    return this.httpService.get<IAccount>('user').pipe(tap((user: IAccount) => {
      this.upsertOneInCache(user);
    }));
  }

  public getUserFromState(): Observable<IAccount> {
    return this.entities$.pipe(mergeAll(), take(1), first());
  }

  public addUserToState(user: IAccount): void {
    this.upsertOneInCache(user);
  }
}
