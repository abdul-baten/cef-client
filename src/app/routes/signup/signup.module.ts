import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './container/signup.component';
import { SignupFacade } from './facade/signup.facade';

const routes: Routes = [
  {
    component: SignupComponent,
    path: ''
  }
];

@NgModule({
  declarations: [SignupComponent],
  imports: [ButtonModule, CommonModule, DividerModule, FormsModule, InputTextModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  providers: [SignupFacade]
})
export class SignupModule { }
