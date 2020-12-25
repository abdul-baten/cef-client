import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './container/product-list.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
  imports: [CardModule, CommonModule, ButtonModule, TooltipModule]
})
export class ProductListModule { }
