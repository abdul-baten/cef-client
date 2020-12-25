import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/models';

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnChanges {
  @Input() productItem: Partial<IProduct> = {};

  ngOnChanges(changes: SimpleChanges): void {
    this.productItem = changes.productItem.currentValue;
  }
}
