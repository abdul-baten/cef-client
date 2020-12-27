import { IVariant } from 'src/app/models';
import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantity',
  pure: true
})
export class QuantityPipe implements PipeTransform {
  transform(variants: Array<IVariant>, arg: string): number {
    const filtered_variant = variants.find((variant) => variant.color === arg);

    return filtered_variant?.quantity as number;
  }
}

@NgModule({
  declarations: [QuantityPipe],
  exports: [QuantityPipe]
})
export class QuantityPipeModule {}
