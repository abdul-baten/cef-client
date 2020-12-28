import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct } from 'src/app/models';
import { CheckoutFacade } from '../../facade/checkout.facade';

@Component({
  selector: 'app-item-total-price',
  styleUrls: ['./item-total-price.component.scss'],
  templateUrl: './item-total-price.component.html'
})
export class ItemTotalPriceComponent implements OnChanges {
  @Input() productItem: Partial<IProduct> = {};
  public cart: Observable<number>;

  constructor(private readonly facade: CheckoutFacade) {
    this.cart = this.facade.getUserFromState().pipe(map((accounts) => accounts[0]?.products?.length ?? 0));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.productItem = changes.productItem.currentValue;
  }
}
