import { ICalculator } from './types';

export class Calculator implements ICalculator {
  displayValue: string = '0';
  memoryValue: number = 0;
  currentValue: number = 0;
  operator: string = '';
  pendingOperation: boolean = false;

  constructor() {}

  updateDisplay(value: string): void {
    this.displayValue = value;
    console.log(this.displayValue); // Placeholder for updating the UI
  }

  clear(): void {
    this.displayValue = '0';
    this.memoryValue = 0;
    this.currentValue = 0;
    this.operator = '';
    this.pendingOperation = false;
  }

  addDigit(digit: string): void {
    if (this.pendingOperation) {
      this.displayValue = '0';
      this.pendingOperation = false;
    }
    if (this.displayValue === '0') {
      this.displayValue = digit;
    } else {
      this.displayValue += digit;
    }
  }

  setOperator(operator: string): void {
    if (this.displayValue) {
      this.calculate();
    }
    this.operator = operator;
    this.memoryValue = parseFloat(this.displayValue);
    this.pendingOperation = true;
  }

  calculate(): void {
    const newValue = parseFloat(this.displayValue);
    if (!isNaN(newValue)) {
      switch (this.operator) {
        case '+':
          this.currentValue = this.memoryValue + newValue;
          break;
        case '-':
          this.currentValue = this.memoryValue - newValue;
          break;
        case '*':
          this.currentValue = this.memoryValue * newValue;
          break;
        case '/':
          if (newValue === 0) {
            throw new Error('Division by zero');
          }
          this.currentValue = this.memoryValue / newValue;
          break;
      }
      this.displayValue = this.currentValue.toString();
    }
  }

  power(): void {
    this.currentValue = Math.pow(parseFloat(this.displayValue), 2);
    this.displayValue = this.currentValue.toString();
  }

  squareRoot(): void {
    this.currentValue = Math.sqrt(parseFloat(this.displayValue));
    this.displayValue = this.currentValue.toString();
  }

  factorial(): void {
    const factorialRec = (n: number): number => {
      if (n <= 1) return 1;
      return n * factorialRec(n - 1);
    };
    this.currentValue = factorialRec(parseFloat(this.displayValue));
    this.displayValue = this.currentValue.toString();
  }

  reciprocal(): void {
    this.currentValue = 1 / parseFloat(this.displayValue);
    this.displayValue = this.currentValue.toString();
  }
}
