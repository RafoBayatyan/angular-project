import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserEditComponent } from "./components/user-edit/user-edit.component";
import { UserListGeneralComponent } from "./components/user-list-general/user-list-general/user-list-general.component";

const routes: Routes = [
 { path: 'edit/:id', component: UserEditComponent},
 { path: 'list-general', component: UserListGeneralComponent},
 { path: '', redirectTo: 'list', pathMatch: 'full'}
]
@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
