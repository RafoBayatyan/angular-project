import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "@angular/common";
import { BankAccountComponent } from './bank-account/bank-account/bank-account.component';
import { BankRoutingModule } from './bank-routing.module';

@NgModule({
  declarations: [
    BankAccountComponent
  ],
  imports: [
    CommonModule,
    BankRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class BankModule {}
