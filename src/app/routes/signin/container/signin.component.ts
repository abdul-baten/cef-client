import Joi from 'joi';
import { CommonValidator } from 'src/app/core/validation';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegexPatterns } from 'src/app/core/constant';

@Component({
  selector: 'app-signin',
  styleUrls: ['./signin.component.scss'],
  templateUrl: './signin.component.html'
})
export class SigninComponent {
  public form_clicked = false;
  public is_password_visible = false;
  public signinForm: FormGroup;

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

  constructor(private formBuilder: FormBuilder) {
    this.signinForm = this.buildForm();
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
      password: ['', CommonValidator.validateControl('password', this.passwordValidationRule)]
    });
  }

  public login(): void {
    this.form_clicked = true;
  }
}
