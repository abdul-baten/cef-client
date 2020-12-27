import { IDropdown, IVariant } from 'src/app/models';
import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color',
  pure: true
})
export class ColorPipe implements PipeTransform {
  transform(variants: Array<IVariant>): IDropdown[] {
    const dropdown: IDropdown[] = [];

    variants.forEach((variant: IVariant) => {
      dropdown.push({ name: variant.color,
        value: variant.color });
    });

    return dropdown;
  }
}

@NgModule({
  declarations: [ColorPipe],
  exports: [ColorPipe]
})
export class ColorPipeModule {}
