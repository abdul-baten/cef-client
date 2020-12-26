import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  styleUrls: ['./checkout.component.scss'],
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      console.error(param.get('id'));
    });
  }
}
