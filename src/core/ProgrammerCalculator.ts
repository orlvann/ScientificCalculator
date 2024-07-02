import { Calculator } from './Calculator';

export class ProgrammerCalculator extends Calculator {
  toBinary(a: number): string {
    return a.toString(2);
  }

  toHex(a: number): string {
    return a.toString(16);
  }

  toOctal(a: number): string {
    return a.toString(8);
  }

  and(a: number, b: number): number {
    return a & b;
  }

  or(a: number, b: number): number {
    return a | b;
  }

  xor(a: number, b: number): number {
    return a ^ b;
  }

  not(a: number): number {
    return ~a;
  }
}
