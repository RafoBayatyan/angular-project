import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formbuilder = inject(FormBuilder);
  router = inject(Router);
  auth = inject(AuthService);

  public loginForm: FormGroup = this.formbuilder.group({
    email: ['', Validators.email],
    password: ['', [Validators.minLength(8), Validators.maxLength(30)]],
  });

  logIn() {debugger;
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.length) {
      users.forEach((el: any) => {
        if (
          el.email === this.loginForm.get('email')?.value &&
          el.password === this.loginForm.get('password')?.value
        ) {
          this.auth.onLogin();
          localStorage.setItem("isLogin",JSON.stringify(true) )
          this.router.navigateByUrl('/user/list-general');
        }
      });
    }
  }
}
