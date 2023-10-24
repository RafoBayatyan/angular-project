import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserEditComponent } from "./components/user-edit/user-edit.component";
import { UserListComponent } from "src/app/modules/users/components/user-list/user-list.component";

const routes: Routes= [
 { path: 'edit', component: UserEditComponent},
 { path: 'list', component: UserListComponent},
 { path: '', redirectTo: 'list', pathMatch: 'full'}
]
@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
