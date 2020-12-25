import { Component } from '@angular/core';
import { IProduct } from 'src/app/models';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public productItems: Partial<IProduct>[] = [];

  constructor() {
    this.productItems = [
      {
        name: 'Test Product 1'
      },
      {
        name: 'Test Product 2'
      },
      {
        name: 'Test Product 2'
      },
      {
        name: 'Test Product 2'
      },
      {
        name: 'Test Product 2'
      },
      {
        name: 'Test Product 2'
      },
      {
        name: 'Test Product 2'
      },
      {
        name: 'Test Product 2'
      },
      {
        name: 'Test Product 2'
      }
    ];
  }
}
