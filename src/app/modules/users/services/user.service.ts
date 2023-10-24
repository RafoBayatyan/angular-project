import { Injectable, OnInit, inject } from '@angular/core';
import { UserHttpService } from '../../../services/http.service';
import { User } from '../components/user-list/user-list.model';
import { Observable, tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
 private httpservice = inject(UserHttpService);
  users: User[] = [];

  getAndSetUsers(): Observable<User[]> {
    if (this.users.length === 0) {
      return this.httpservice.getUsers().pipe(tap((users) => {
        this.users = users
      }
    ));
    } else {
      return of(this.users);
    }
  }

  deleteUser(i: number): void {
    this.users.splice(i, 1);
  }

  editUser(id: number , formValue: any){
   const user = this.users?.find((el: User) => el.id === id);
   if(!user) {
    return;
   }
   user.email = formValue.email;
   user.username = formValue.userName;
   user.name.firstname = formValue.firstName;
   user.name.lastname = formValue.lastName;
   user.address.city = formValue.city;
  }
  updateUsercolor(id: number,  color: string){
   const user = this.users?.find( (el:User) => el.id === id);
    if(user){
      user.color = color;
    }
  }
}
