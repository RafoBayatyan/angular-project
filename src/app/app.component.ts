import { Component, inject, OnInit,  } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ColorService } from './shared/components/random-color/color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'user-list';
  auth = inject(AuthService);
  colorService = inject(ColorService)
  ngOnInit(): void {
    const isLogin: any = localStorage.getItem("isLogin")
    if(isLogin !== null){
    this.auth.isLoggedIn.next( JSON.parse(isLogin))
    }
  }
  changeTheme(e: any): void{
    if(e.target.checked) {
      this.colorService.colorMode.next('gray');
    }else {
      this.colorService.colorMode.next('white')
    }


  }

}
