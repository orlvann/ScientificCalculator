import { IProgrammerCalculator } from './types';
import { Calculator } from './Calculator';

export class ProgrammerCalculator
  extends Calculator
  implements IProgrammerCalculator
{
  toBinary(value: number): string {
    return value.toString(2);
  }

  toHex(value: number): string {
    return value.toString(16);
  }

  toOctal(value: number): string {
    return value.toString(8);
  }

  and(a: number, b: number): number {
    return a & b;
  }

  or(a: number, b: number): number {
    return a | b;
  }

  not(a: number): number {
    return ~a;
  }

  xor(a: number, b: number): number {
    return a ^ b;
  }

  // Add more functionalities as needed
}
