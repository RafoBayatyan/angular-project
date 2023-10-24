import {
  Component,
  EventEmitter,
  OnInit,
  Input,
  Output,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { A } from './select-items.model';
import { fromEvent, } from 'rxjs';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css'],
})
export class CustomSelectComponent implements OnInit, OnChanges {
  @Input() items: A<any>[];
  @Input() valueForKey: string = 'id';
  @Input() nameForKey: string;
  @Output() selectItem: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('select') div: ElementRef<HTMLDivElement>;

  drpodownName: string;
  drpodownNamesArray: Array<string> = [];
  showDropdown: boolean = false;
  active: number = 0;
  click: any;
  isChecked: Array<boolean> = [];
  term = '';

  ngOnInit(): void {
    this.click = fromEvent(document, 'click', (e: Event) => e);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items'].currentValue !== changes['items'].previousValue) {
      this.isChecked = [];
      for (let i = 0; i < this.items.length; i++) {
        this.isChecked.push(false);
      }
    }
  }

  dropdownOpen(): void {
    this.showDropdown = true;
    this.click.subscribe((e: Event) => {
      if (!this.div.nativeElement.contains(e.target as any)) {
        this.showDropdown = false;
      }
    });
  }
  onSelect(e: any, item: A<any>, i: number): void {
    if (e.target.checked) {
      this.drpodownNamesArray.push(item[this.nameForKey]);
    } else {
      let index = this.drpodownNamesArray.indexOf(item[this.nameForKey]);
      this.drpodownNamesArray.splice(index, 1);
    }
    this.drpodownName = this.drpodownNamesArray.toString();
    this.selectItem.emit(item[this.valueForKey]);

    this.term = '';
    this.active = i;
  }
  onKeyDown(e: any) {
    if (e.keyCode === 13) {
      if (!this.isChecked[this.active]) {
        this.isChecked[this.active] = true;
        this.drpodownNamesArray.push(this.items[this.active][this.nameForKey]);
      } else {
        this.isChecked[this.active] = false;

        let index = this.drpodownNamesArray.indexOf(
          this.items[this.active][this.nameForKey]
        );
        this.drpodownNamesArray.splice(index, 1);
      }
      this.drpodownName = this.drpodownNamesArray.toString();
      this.selectItem.emit(this.items[this.active][this.valueForKey]);
      this.term = '';
    }

    if (e.keyCode === 40) {
      if (this.active < this.items.length - 1) {
        this.active = this.active + 1;
      }
    } else if (e.keyCode === 38) {
      if (this.active > 0) {
        this.active = this.active - 1;
      }
    }
  }
}
