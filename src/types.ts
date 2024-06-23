export interface ICalculator {
  displayValue: string;
  memoryValue: number;
  currentValue: number;
  operator: string;
  pendingOperation: boolean;

  updateDisplay(value: string): void;
  clear(): void;
  addDigit(digit: string): void;
  setOperator(operator: string): void;
  calculate(): void;
  power(): void;
  squareRoot(): void;
  factorial(): void;
  reciprocal(): void;
}

export interface IScientificCalculator extends ICalculator {
  log(value: number): number;
  ln(value: number): number;
  sin(value: number): number;
  cos(value: number): number;
  tan(value: number): number;
  ctg(value: number): number;
}

export interface IProgrammerCalculator extends ICalculator {
  toBinary(value: number): string;
  toHex(value: number): string;
  toOctal(value: number): string;
  and(a: number, b: number): number;
  or(a: number, b: number): number;
  not(a: number): number;
  xor(a: number, b: number): number;
}
