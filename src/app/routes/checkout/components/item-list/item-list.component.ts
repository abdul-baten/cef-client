import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CheckoutFacade } from '../../facade/checkout.facade';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/models';
import { noop } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-item-list',
  styleUrls: ['./item-list.component.scss'],
  templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnChanges {
  @Input() product!: IProduct;
  public detailsForm: FormGroup;
  public formClicked = false;

  constructor(private readonly facade: CheckoutFacade, private readonly formBuilder: FormBuilder) {
    this.detailsForm = this.buildDetailsForm();

    this.detailsForm.valueChanges.subscribe((value) => {
      const { color, size, quantity } = value;

      console.error(Number(this.product.price) * color * size * quantity);
    });
  }

  private buildDetailsForm(): FormGroup {
    return this.formBuilder.group({
      color: [1, Validators.required],
      quantity: [1, Validators.required],
      size: [1, Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.product = changes.product.currentValue;
  }

  remove(id: string): void {
    this.facade.remove(id).subscribe(noop);
  }
}
