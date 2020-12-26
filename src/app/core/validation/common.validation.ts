import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Schema } from 'joi';

export class CommonValidator {
  static validateControl (control_name: string, schema: Schema): ValidatorFn {
    return (control: AbstractControl): { [key: string]: string } | null => {
      const { error } = schema.validate(control.value);

      return error ? { [control_name]: error?.message } : null;
    };
  }

  public static compareTwoFields (control_name: string, matching_control: string): (form_group: FormGroup)=> void {
    return (form_group: FormGroup) => {
      const control = form_group.controls[control_name];
      const match_control = form_group.controls[matching_control];

      if (match_control.errors && !match_control.errors.MISMATCH) {
        return;
      }

      if (control.value === match_control.value) {
        match_control.setErrors(null);
      } else {
        match_control.setErrors({ MISMATCH: true });
      }
    };
  }
}
