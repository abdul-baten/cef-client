import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/models';

@Component({
  selector: 'app-item-total-price',
  styleUrls: ['./item-total-price.component.scss'],
  templateUrl: './item-total-price.component.html'
})
export class ItemTotalPriceComponent implements OnChanges {
  @Input() productItem: Partial<IProduct> = {};

  ngOnChanges(changes: SimpleChanges): void {
    this.productItem = changes.productItem.currentValue;
  }
}
