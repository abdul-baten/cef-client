import { ButtonModule } from 'primeng/button';
import { CheckoutComponent } from './container/checkout.component';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemTotalPriceComponent } from './components/item-total-price/item-total-price.component';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    component: CheckoutComponent,
    path: ''
  }
];

@NgModule({
  declarations: [CheckoutComponent, ItemTotalPriceComponent, ItemListComponent],
  imports: [
    ButtonModule,
    CommonModule,
    DividerModule,
    DropdownModule,
    FormsModule,
    InputNumberModule,
    PanelModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CheckoutModule { }
