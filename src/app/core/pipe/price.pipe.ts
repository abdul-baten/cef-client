import { IVariant } from 'src/app/models';
import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  pure: true
})
export class PricePipe implements PipeTransform {
  transform(variants: Array<IVariant>, arg: string): number {
    const filtered_variant = variants.find((variant) => variant.color === arg);

    return filtered_variant?.quantity as number;
  }
}

@NgModule({
  declarations: [PricePipe],
  exports: [PricePipe]
})
export class PricePipeModule {}
