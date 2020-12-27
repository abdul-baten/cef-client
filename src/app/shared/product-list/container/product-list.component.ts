import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { IProduct } from 'src/app/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnChanges {
  @Input() productItem: Partial<IProduct> = {};
  @Output() clicked = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    this.productItem = changes.productItem.currentValue;
  }

  public navigate(id: number): void {
    this.clicked.emit(id);
  }
}
