import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../modules/users/components/user-list/user-list.model';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  http = inject(HttpClient);
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/users'); // use configs
  }
  getUser(id: any): Observable<User> {
    return this.http.get<User>(`/users/${id}`);
  }
}
