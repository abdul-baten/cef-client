import { IDropdown, IVariant } from 'src/app/models';
import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'size',
  pure: true
})
export class SizePipe implements PipeTransform {
  transform(variants: Array<IVariant>, arg: string): IDropdown[] {
    const dropdown: IDropdown[] = [];
    const filtered_variant = variants.find((variant) => variant.color === arg);

    filtered_variant?.size.forEach((variant: string) => {
      dropdown.push({ name: variant,
        value: variant });
    });

    return dropdown;
  }
}

@NgModule({
  declarations: [SizePipe],
  exports: [SizePipe]
})
export class SizePipeModule {}
