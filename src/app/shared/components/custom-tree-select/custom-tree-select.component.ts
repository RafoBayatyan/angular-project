import { Component, EventEmitter, Input, Output } from '@angular/core';
import { A } from '../custom-select/select-items.model';
import { KeysCodes } from './enums/keys';

@Component({
  selector: 'app-custom-tree-select',
  templateUrl: './custom-tree-select.component.html',
  styleUrls: ['./custom-tree-select.component.css'],
})
export class CustomTreeSelectComponent {
  @Input() treeSelectItems: A<any>[];
  @Input() childItemKey: string;
  @Input() nameForKey: string;
  @Input() valueForKey: string = 'id';
  @Output() selectItem: EventEmitter<any> = new EventEmitter<any>();

  isChildOpened: boolean = false;
  showDropdown: boolean = false;
  childActiveIndex: number = 0;
  openedParentId: number = NaN;
  activeIndex: number = 0;
  dropdownName: string;

  dropdownOpen(): void {
    this.showDropdown = !this.showDropdown;
  }
  treeSelectOpen(openedParentId: number, i: number): void {
    this.activeIndex = i;
    if (this.openedParentId === openedParentId) {
      this.openedParentId = NaN;
      this.isChildOpened = false;
    } else {
      this.openedParentId = openedParentId;
      this.isChildOpened = true;
    }
  }
  onSelect(item: A<any>): void {
    this.dropdownName = item[this.nameForKey];
    this.selectItem.emit(item[this.valueForKey]);
  }
  onKeyDown(e: any): void {
    switch (e.keyCode) {
      case KeysCodes.Enter:
        if (this.openedParentId === this.treeSelectItems[this.activeIndex][this.valueForKey]) {
          this.dropdownName = this.treeSelectItems[this.activeIndex][this.childItemKey][this.childActiveIndex][this.nameForKey];
          this.openedParentId = NaN;
          this.isChildOpened = false;
        } else {
          this.openedParentId = this.treeSelectItems[this.activeIndex][this.valueForKey];
          this.isChildOpened = true;
        }
      break;
      case KeysCodes.Down:
        if (this.isChildOpened) {
            if (this.childActiveIndex < this.treeSelectItems[this.activeIndex][this.childItemKey].length - 1) {
              this.childActiveIndex = this.childActiveIndex + 1;
            }
        } else {
          if (this.activeIndex < this.treeSelectItems.length - 1) {
            this.activeIndex = this.activeIndex + 1;
          }
        }
      break;
      case KeysCodes.Up:
        if (this.isChildOpened) {
          if (this.childActiveIndex > 0) {
            this.childActiveIndex = this.childActiveIndex - 1;
          }
        } else {
          if (this.activeIndex > 0) {
            this.activeIndex = this.activeIndex - 1;
          }
        }
      break;
      case  KeysCodes.Right:
        this.openedParentId = this.treeSelectItems[this.activeIndex][this.valueForKey];
        this.isChildOpened = true;
      break;
      case KeysCodes.Left:
        this.openedParentId = NaN;
        this.isChildOpened = false;
      break;
    }
  }
}
