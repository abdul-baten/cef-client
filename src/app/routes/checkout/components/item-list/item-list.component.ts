import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/models';

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

  constructor(private readonly formBuilder: FormBuilder) {
    this.detailsForm = this.buildDetailsForm();
  }

  private buildDetailsForm(): FormGroup {
    return this.formBuilder.group({
      color: ['', Validators.required],
      quantity: [1, Validators.required],
      size: ['', Validators.required]
    });
  }

  public addCart(): void {
    const { color, quantity, size } = this.detailsForm.value;

    console.error(color, quantity, size);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.product = changes.product.currentValue;
  }
}
