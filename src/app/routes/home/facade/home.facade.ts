import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/models';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/service/product.service';
import { Router } from '@angular/router';

@Injectable()
export class HomeFacade {
  constructor(private readonly productService: ProductService, private readonly router: Router) { }

  public getProducts(): Observable<IProduct[]> {
    return this.productService.getProducts();
  }

  public navigate(id: number): void {
    this.router.navigate(['details', id]);
  }
}
