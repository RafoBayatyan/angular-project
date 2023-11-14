import { Subject } from 'rxjs';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ColorService } from './color.service';

@Component({
  selector: 'app-random-color',
  templateUrl: './random-color.component.html',
  styleUrls: ['./random-color.component.css'],
})
export class RandomColorComponent implements OnInit {
  @Input() componentName: string;
  ColorService = inject(ColorService);
  color$: Subject<string>;

  ngOnInit(): void {
    this.listenTolColorChange();
  }

  listenTolColorChange(): void {
    this.color$ = this.ColorService.colorChange;
  }

  changeColor(): void {
    this.ColorService.randomColor();
  }
}
