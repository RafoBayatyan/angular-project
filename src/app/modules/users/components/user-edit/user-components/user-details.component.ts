import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "../../user-list/user-list.model";
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input() user?: User
  @Output() colorChange: EventEmitter<any> = new EventEmitter <any>();

  update(e: any): void {
    this.colorChange.emit(e.target.value);
  }

}
