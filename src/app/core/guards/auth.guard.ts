import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { inject } from '@angular/core';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
debugger
  if (authService.isLoggedIn.getValue() === false) {
    router.navigateByUrl('/login');
  }
  return authService.isLoggedIn.getValue();
};
