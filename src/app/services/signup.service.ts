import { FormGroup } from '@angular/forms';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  router = inject(Router);

  signUp(form: FormGroup) {
    const {firstName,lastName,email,password} = form.value;
    const user = {
      firstName,
      lastName,
      email,
      password
    }

    if (!form.invalid) {
      const localStorageContentUsers = localStorage.getItem('users');
      let users: any;
      if (localStorageContentUsers === null ) {
        users = [];
      } else {
        users = JSON.parse(localStorageContentUsers as any);
      }
      users.push(user);

      localStorage.setItem('users', JSON.stringify(users));
      this.router.navigateByUrl('/login');
    }
  }
}
