import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { DetailsFacade } from '../facade/details.facade';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/models';
import { Observable, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  styleUrls: ['./details.component.scss'],
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnDestroy {
  private productId= '';
  private subscription$ = new Subscription();
  public detailsForm: FormGroup;
  public formClicked = false;
  public product: Observable<IProduct>;

  constructor(private activatedRoute: ActivatedRoute, private readonly facade: DetailsFacade, private formBuilder: FormBuilder) {
    this.detailsForm = this.buildDetailsForm();

    this.product = this.activatedRoute.paramMap.pipe(switchMap((param: ParamMap) => {
      const id = param.get('id') as string;

      this.productId = id;

      return this.facade.getProductById(id);
    }), tap((product) => {
      if (!product.available) {
        this.detailsForm.disable();
      }
    }));

    this.subscription$.add(this.detailsForm.controls.color.valueChanges.subscribe(() => {
      this.detailsForm.controls.size.reset();
      this.detailsForm.controls.quantity.setValue(1);
    }));
  }

  private buildDetailsForm(): FormGroup {
    return this.formBuilder.group({
      color: ['', Validators.required],
      quantity: [1, Validators.required],
      size: ['', Validators.required]
    });
  }

  public addCart(): void {
    this.facade.addCart(this.productId).unsubscribe();
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }

    if (this.facade.getSubs()) {
      this.facade.getSubs().unsubscribe();
    }
  }
}
