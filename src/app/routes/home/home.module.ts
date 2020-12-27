import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { HomeComponent } from './container/home.component';
import { HomeFacade } from './facade/home.facade';
import { NgModule } from '@angular/core';
import { ProductListModule } from 'src/app/shared/product-list/product-list.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DividerModule,
    HeaderModule,
    ProductListModule,
    RouterModule.forChild(routes)
  ],
  providers: [HomeFacade]
})
export class HomeModule { }
