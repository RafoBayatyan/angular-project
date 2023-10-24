import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
   isLoggedIn = new BehaviorSubject<boolean>(false)
  onLogin() {
    this.isLoggedIn.next(true)

  }

}
