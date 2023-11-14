import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ThemeColors } from 'src/app/core/enums/theme.enum';


@Injectable({
  providedIn: 'root',
})
export class ColorService {
   colorMode = new BehaviorSubject<string>(localStorage.getItem('Mode') as string);
  colorChange: Subject<string> = new Subject<string>();
  get isDefoult() {
    if(this.colorMode.getValue() === ThemeColors.Gray) {
      return false;
    }else{
      return true;
    }
  }
  constructor() {

  }

  randomColor = () => {
    this.colorChange.next("#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase());
  }

}
