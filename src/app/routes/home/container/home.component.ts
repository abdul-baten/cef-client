import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models';
import { HomeFacade } from '../facade/home.facade';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public productItems: Observable<IProduct[]>;

  constructor(private readonly facade: HomeFacade) {
    this.productItems = this.facade.getProducts();
  }

  public navigate(id: number): void {
    this.facade.navigate(id);
  }
}
