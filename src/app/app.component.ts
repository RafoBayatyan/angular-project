import { Component, inject, OnInit,  } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ColorService } from './shared/components/random-color/color.service';
import { ThemeColors } from './core/enums/theme.enum';

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
    const newTheme = e.target.checked ? ThemeColors.Gray : ThemeColors.White;
    this.colorService.colorMode.next(newTheme);
    localStorage.setItem('Mode',newTheme);


  }

}
