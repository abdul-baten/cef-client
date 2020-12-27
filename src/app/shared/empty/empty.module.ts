import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { EmptyComponent } from './container/empty.component';
import { NgModule } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [EmptyComponent],
  exports: [EmptyComponent],
  imports: [CommonModule, DividerModule, SkeletonModule]
})
export class EmptyModule { }
