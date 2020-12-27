import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/models';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/service/product.service';
import { Router } from '@angular/router';

@Injectable()
export class DetailsFacade {
  constructor(private readonly productService: ProductService, private readonly router: Router) { }

  public getProductById(id: number): Observable<IProduct> {
    return this.productService.getProductById(id);
  }

  public navigate(id: number): void {
    this.router.navigate(['details', id]);
  }
}
