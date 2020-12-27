import { ButtonModule } from 'primeng/button';
import { ColorPipeModule, QuantityPipeModule, SizePipeModule } from 'src/app/core/pipe';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './container/details.component';
import { DetailsFacade } from './facade/details.facade';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { EmptyModule } from 'src/app/shared/empty/empty.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    component: DetailsComponent,
    path: ''
  }
];

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    ButtonModule,
    ColorPipeModule,
    CommonModule,
    DividerModule,
    DropdownModule,
    EmptyModule,
    FormsModule,
    InputNumberModule,
    PanelModule,
    QuantityPipeModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SizePipeModule
  ],
  providers: [DetailsFacade]
})
export class DetailsModule { }
