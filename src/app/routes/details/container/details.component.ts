import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component } from '@angular/core';
import { DetailsFacade } from '../facade/details.facade';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/models';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  styleUrls: ['./details.component.scss'],
  templateUrl: './details.component.html'
})
export class DetailsComponent {
  public product: Observable<IProduct>;
  public detailsForm: FormGroup;
  public formClicked = false;

  constructor(private activatedRoute: ActivatedRoute, private readonly facade: DetailsFacade, private formBuilder: FormBuilder) {
    this.product = this.activatedRoute.paramMap.pipe(switchMap((param: ParamMap) => {
      const id = param.get('id');

      return this.facade.getProductById(Number(id) as number);
    }));

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
}
