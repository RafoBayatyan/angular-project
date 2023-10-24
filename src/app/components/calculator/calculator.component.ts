import { Component } from '@angular/core';
import { Operation } from './enums/operation';

@Component({
  selector: 'app-calc',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  readonly Operation = Operation;
  previusOperation: Operation = Operation.Empty;
  currentValue: string = '0';
  firstValue: number = 0;
  secondNumber: number = NaN;

  onDot(dot: string): void {
    if (this.currentValue.includes('.')) {
      return;
    } else {
      this.currentValue += dot;
    }
  }
  onNumberClick(num: string): void {
    if (this.currentValue === '0') {
      this.currentValue = num;
    } else {
      this.currentValue += num;
    }
  }
  onOperationClick(operation: Operation): void {
    if (this.previusOperation === Operation.Empty) {
      this.firstValue = parseFloat(this.currentValue);
      this.currentValue = '0';
      this.previusOperation = operation;
    } else {
      this.calculateOnOperation(operation);
    }
  }

  valueCalculate(operation: Operation): number {
    this.secondNumber = parseFloat(this.currentValue);
    let total: number = NaN;

    if (isNaN(this.secondNumber)) {
      this.previusOperation = operation;
      total = NaN;
      return NaN;
    }
    switch (this.previusOperation) {
      case Operation.Sum:
        total = this.firstValue + this.secondNumber;
        break;
      case Operation.Minus:
        total = this.firstValue - this.secondNumber;
        break;

      case Operation.Div:
        total = this.firstValue / this.secondNumber;
        break;

      case Operation.Mul:
        total = this.firstValue * this.secondNumber;
        break;

      case Operation.Procent:
        total = (this.firstValue * this.secondNumber) / 100;
        break;
      default:
        this.secondNumber = NaN;
    }
    return total;
  }
  totalassignValues(operation: Operation, total: number): void {
    if (isNaN(total)) {
      return;
    }
    this.currentValue = '0';

    this.firstValue = total;
    this.previusOperation = operation;
  }
  onEqual(): void {
    if (this.previusOperation === Operation.Empty) {
      return;
    }
    const total = this.valueCalculate(this.previusOperation);
    this.currentValue = String(total || '0');
    this.firstValue = 0;
    this.previusOperation = Operation.Empty;
  }

  clearAll(): void {
    this.firstValue = 0;
    this.currentValue = '0';
    this.previusOperation = Operation.Empty;
  }

  calculateOnOperation(operation: Operation): void {
    const total = this.valueCalculate(operation);
    this.totalassignValues(operation, total);
  }
}
