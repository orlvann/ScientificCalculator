import { Calculator } from './Calculator';

export class ScientificCalculator extends Calculator {
  power(a: number, b: number): number {
    return Math.pow(a, b);
  }

  sqrt(a: number): number {
    return Math.sqrt(a);
  }

  reciprocal(a: number): number {
    if (a === 0) {
      throw new Error('Division by zero');
    }
    return 1 / a;
  }

  factorial(a: number): number {
    if (a < 0) throw new Error('Negative factorial not defined');
    return a === 0 ? 1 : a * this.factorial(a - 1);
  }

  sin(a: number, isDegrees: boolean): number {
    return isDegrees ? Math.sin((a * Math.PI) / 180) : Math.sin(a);
  }

  cos(a: number, isDegrees: boolean): number {
    return isDegrees ? Math.cos((a * Math.PI) / 180) : Math.cos(a);
  }

  tan(a: number, isDegrees: boolean): number {
    return isDegrees ? Math.tan((a * Math.PI) / 180) : Math.tan(a);
  }

  cot(a: number, isDegrees: boolean): number {
    return isDegrees ? 1 / Math.tan((a * Math.PI) / 180) : 1 / Math.tan(a);
  }

  log(a: number): number {
    return Math.log10(a);
  }

  ln(a: number): number {
    return Math.log(a);
  }
}
