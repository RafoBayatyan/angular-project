import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from 'src/app/modules/users/components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-edit/user-components/user-details.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserListGeneralComponent } from './components/user-list-general/user-list-general/user-list-general.component';
import { AnotherComponentComponent } from './components/another-component/another-component/another-component.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserEditComponent,
    UserDetailsComponent,
    UserListGeneralComponent,
    AnotherComponentComponent,

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],

})
export class UsersModule { }
