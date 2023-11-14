import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BankAccountComponent } from "./bank-account/bank-account/bank-account.component";

const routes: Routes = [
  {path: 'bank-account', component: BankAccountComponent}
]
@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule {}
