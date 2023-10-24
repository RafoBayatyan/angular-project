import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from 'src/app/modules/users/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../../../../components/pop-up/pop-up.component';
import { User } from './user-list.model';


type A<T> = Record<string, T>
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.componenet.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userService = inject(UsersService);
  dialogRef = inject(MatDialog);
  users: User[]
  template: number;
  item:string = 'model'
  valueForKey: string = 'id';
  nameForKey: string = 'name';
  testArray: any = [
    { id: 1, name: 'Mercedes' },
    { id: 2, name: 'Bmw' },
    { id: 3, name: 'Audi' },
    { id: 4, name: 'Mazda' },
    { id: 5, name: 'Ferrari' },
  ]
  treeSelectTestArray:any =[
    { id: 1,
      name: 'Mercedes',
      model:[
        {id: 2, name: 'C-Class' },
        {id: 3, name: 'E-Class' },
        {id: 4, name: 'S-Class' },

    ]
     },
    { id: 5,
       name: 'Bmw',
       model:[
        {id: 6, name: '3-series'},
        {id: 7, name: '4-series'},
        {id: 8, name: '5-series'},

       ]
   },
    { id: 9,
       name: 'Audi',
       model:[
        {id: 10, name: 'A4'},
        {id: 11, name: 'A5'},
        {id: 12, name: 'A6'},

       ]
       },
    { id: 13,
       name: 'Mazda',
       model:[
        {id: 14, name: 'CX-3'},
        {id: 15, name: 'CX-5'},
        {id: 16, name: 'CX-7'},

       ]
      },
    { id: 17,
       name: 'Ferrari',
       model:[
        {id: 18, name: '458 Italia'},
        {id: 19, name: 'F430'},
        {id: 20, name: 'California'},

       ]
       },
  ]

  // ngOnChanges, ngOnInit , ngAfterViewInit, ngAfterContentInit, ngOnDestroy
  ngOnInit(): void {
   this.userService.getAndSetUsers().subscribe((data: User[])=>{
    this.users = data;

   });
  }

  deleteUser(i: number): void {
    this.dialogRef.open(PopUpComponent, {
      data: { callback: () => this.userService.deleteUser(i) },
    });
  }
  selectUser(value: number): void {
    this.template = value;
  }
  treeSelectUser(value: number):void{

  }
}
