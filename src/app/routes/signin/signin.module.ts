import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './container/signin.component';

const routes: Routes = [
  {
    component: SigninComponent,
    path: ''
  }
];

@NgModule({
  declarations: [SigninComponent],
  imports: [ButtonModule, CommonModule, DividerModule, FormsModule, InputTextModule, ReactiveFormsModule, RouterModule.forChild(routes)]
})
export class SigninModule { }
