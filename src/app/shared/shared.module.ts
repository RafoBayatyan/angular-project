import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTreeSelectComponent } from './components/custom-tree-select/custom-tree-select.component';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
import { CalculatorComponent } from '../components/calculator/calculator.component';
import { SelectFilterPipie } from './components/custom-select/filter-select.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RandomColorComponent } from './components/random-color/random-color.component';

@NgModule({
  declarations: [
   CustomSelectComponent,
   CustomTreeSelectComponent,
   CalculatorComponent,
   SelectFilterPipie,
   RandomColorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomSelectComponent,
    CustomTreeSelectComponent,
    CalculatorComponent,
    RandomColorComponent
  ]
})
export class SharedModule {}
