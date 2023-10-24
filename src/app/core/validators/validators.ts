import { ValidationErrors, AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';
const UpperCase = /^[A-Z].*$/;
const LowerCase = /[a-z]+/;
const Number = /\d+/;
const Symbol = /[^\w\s]/;

export class CustomValidators {
 static hasUpperCase(control: AbstractControl): ValidationErrors | null  {
      if (UpperCase.test(control.value)) {
        return null;
      }
      return { "UpperCase": true };
    };

 static hasLoweCase (contol: AbstractControl): ValidationErrors | null {
      if (LowerCase.test(contol.value)) {
        return null;
      }
      return { "LowerCase": true };
    };


 static hasNumber (control: AbstractControl): ValidationErrors | null  {
      if (Number.test(control.value)) {
        return null;
      }
      return { "Number": true };
    };

 static hasSymbol(control: AbstractControl): ValidationErrors | null  {
      if(Symbol.test(control.value)){
        return null;
      }
      return { "Symbol": true };
    }

 static matchPassword(firstControl:any, secondControl:any):ValidatorFn {
    return(control:AbstractControl): ValidationErrors | null => {
      const password = control.get(firstControl)?.value;
      const confirmPassword = control.get(secondControl)?.value ;
      if(password !== confirmPassword){
        return { "noMatch": true };
      }
      return null
    }

  }
}
