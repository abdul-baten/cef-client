import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './container/details.component';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
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
  imports: [ButtonModule, CommonModule, DividerModule, DropdownModule, FormsModule, InputNumberModule, PanelModule, ReactiveFormsModule, RouterModule.forChild(routes)]
})
export class DetailsModule { }
