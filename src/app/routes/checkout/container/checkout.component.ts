import { CheckoutFacade } from '../facade/checkout.facade';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkout',
  styleUrls: ['./checkout.component.scss'],
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent {
  public products: Observable<IProduct[]>;

  constructor(private readonly facade: CheckoutFacade) {
    this.products = this.facade.getProducts();
  }
}
