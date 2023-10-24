import { CustomValidators, } from '../../core/validators/validators';
import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignUpService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  formbuilder = inject(FormBuilder);
  signUpService = inject(SignUpService);

  public signupForm: FormGroup = this.formbuilder.group({
    firstName: [
      '',
      [
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required,
        CustomValidators.hasUpperCase,
      ],
    ],
    lastName: [
      '',
      [
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required,
        CustomValidators.hasUpperCase,
      ],
    ],
    email: ['', [Validators.email, Validators.required]],
    password: [
      '',
      [
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.required,
        CustomValidators.hasUpperCase,
        CustomValidators.hasLoweCase,
        CustomValidators.hasNumber,
        CustomValidators.hasSymbol
      ],
    ],
    confirmPassword: [
      '',
      [
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.required,
        CustomValidators.hasUpperCase,
        CustomValidators.hasLoweCase,
        CustomValidators.hasNumber,
        CustomValidators.hasSymbol
      ],
    ],
  },{validator: CustomValidators.matchPassword('password', 'confirmPassword')});

  signUp() {
    this.signUpService.signUp(this.signupForm);
  }
}
