import { IScientificCalculator } from './types';
import { Calculator } from './Calculator';

export class ScientificCalculator
  extends Calculator
  implements IScientificCalculator
{
  mode: 'DEG' | 'RAD' = 'DEG';

  toggleMode(): void {
    this.mode = this.mode === 'DEG' ? 'RAD' : 'DEG';
    this.updateDisplay(`Mode: ${this.mode}`);
  }

  toRadians(angle: number): number {
    return this.mode === 'DEG' ? angle * (Math.PI / 180) : angle;
  }

  sin(value: number): number {
    const radians = this.toRadians(value);
    return Math.sin(radians);
  }

  cos(value: number): number {
    const radians = this.toRadians(value);
    return Math.cos(radians);
  }

  tan(value: number): number {
    const radians = this.toRadians(value);
    return Math.tan(radians);
  }

  ctg(value: number): number {
    try {
      const radians = this.toRadians(value);
      if (Math.tan(radians) === 0) {
        throw new Error('Invalid input for ctg');
      }
      return 1 / Math.tan(radians);
    } catch (error) {
      this.updateDisplay('Error');
      return NaN;
    }
  }

  log(value: number): number {
    try {
      if (value <= 0) {
        throw new Error('Invalid input for log');
      }
      return Math.log10(value);
    } catch (error) {
      this.updateDisplay('Error');
      return NaN;
    }
  }

  ln(value: number): number {
    try {
      if (value <= 0) {
        throw new Error('Invalid input for ln');
      }
      return Math.log(value);
    } catch (error) {
      this.updateDisplay('Error');
      return NaN;
    }
  }
}
