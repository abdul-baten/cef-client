import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CheckoutFacade } from '../../facade/checkout.facade';
import { IProduct } from 'src/app/models';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-item-total-price',
  styleUrls: ['./item-total-price.component.scss'],
  templateUrl: './item-total-price.component.html'
})
export class ItemTotalPriceComponent implements OnChanges {
  @Input() productItem: Partial<IProduct> = {};
  public cart: Observable<number>;
  public price: Observable<number>;

  constructor(private readonly facade: CheckoutFacade) {
    this.cart = this.facade.getUserFromState().pipe(map((accounts) => accounts[0]?.products?.length ?? 0));
    this.price = this.facade.getProducts().pipe(map((prod) => {
      const product_prices: number[] = [];

      prod.forEach((product) => {
        product_prices.push(Number(product.price));
      });

      return product_prices.reduce((acc, cur) => acc + cur, 0);
    }), shareReplay());
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.productItem = changes?.productItem?.currentValue;
  }
}
