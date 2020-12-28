import { CommonModule } from '@angular/common';
import { LoaderComponent } from './container/loader.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LoaderComponent],
  exports: [LoaderComponent],
  imports: [CommonModule]
})
export class LoaderModule {}
