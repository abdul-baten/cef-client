import { ButtonModule } from 'primeng/button';
import { CheckoutComponent } from './container/checkout.component';
import { CheckoutFacade } from './facade/checkout.facade';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { EmptyModule } from 'src/app/shared/empty/empty.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemTotalPriceComponent } from './components/item-total-price/item-total-price.component';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { RouterModule, Routes } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { PricePipeModule } from 'src/app/core/pipe';

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
    EmptyModule,
    FormsModule,
    InputNumberModule,
    PanelModule,
    PricePipeModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TooltipModule
  ],
  providers: [CheckoutFacade]
})
export class CheckoutModule { }
