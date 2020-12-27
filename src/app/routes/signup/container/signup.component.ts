import Joi from 'joi';
import { CommonValidator } from 'src/app/core/validation';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { noop } from 'rxjs';
import { RegexPatterns } from 'src/app/core/constant';
import { SignupFacade } from '../facade/signup.facade';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  styleUrls: ['./signup.component.scss'],
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  public form_clicked = false;
  public is_password_visible = false;
  public signupForm: FormGroup;

  private fullnameValidationRule = Joi.string().regex(RegexPatterns.ALPHA_NUMERIC_WITH_SPACE).
    trim().
    required().
    messages({
      'string.base': 'Full name should be of type text.',
      'string.empty': 'Full name cannot be empty.',
      'string.pattern.base': 'Only letters, numbers & spaces are allowed.'
    });

  private emailValidationRule = Joi.string().
    email({
      minDomainSegments: Number.parseInt('2', 10),
      tlds: false
    }).
    trim().
    required().
    messages({
      'string.base': 'Email address should be of type text.',
      'string.email': 'Please enter a valid email address.',
      'string.empty': 'Email address cannot be empty.'
    });

  private passwordValidationRule = Joi.string().
    regex(RegexPatterns.PASSWORD).
    required().
    messages({
      'string.base': 'Password should be of type text.',
      'string.empty': 'Password cannot be empty.',
      'string.pattern.base': 'Password should be minimum 8 characters long with a mix of letters, numbers & symbols.'
    });

  constructor(private readonly facade: SignupFacade, private readonly formBuilder: FormBuilder) {
    this.signupForm = this.buildForm();
  }

  /**
   * Builds the form with controls
   *
   * @private
   * @returns FormGroup
   *
   * @memberOf SigninComponent
   */
  private buildForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', CommonValidator.validateControl('email', this.emailValidationRule)],
      fullname: ['', CommonValidator.validateControl('user_full_name', this.fullnameValidationRule)],
      password: ['', CommonValidator.validateControl('password', this.passwordValidationRule)]
    });
  }

  public register(): void {
    if (this.signupForm.valid) {
      this.form_clicked = true;
      this.facade.
        registerUser(this.signupForm.value).
        pipe(tap(() => {
          this.facade.navigate('/signin');
          this.signupForm.reset();
        })).
        subscribe(noop);
    }
  }
}
