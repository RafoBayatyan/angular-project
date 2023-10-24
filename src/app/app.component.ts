import { Component, inject, OnInit,  } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'user-list';
  auth = inject(AuthService)
  ngOnInit(): void {
    const isLogin: any = localStorage.getItem("isLogin")
    if(isLogin !== null){
    this.auth.isLoggedIn.next( JSON.parse(isLogin))
    }
  }

}
