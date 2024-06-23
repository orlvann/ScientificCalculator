import { IScientificCalculator } from './types';
import { Calculator } from './Calculator';

export class ScientificCalculator
  extends Calculator
  implements IScientificCalculator
{
  log(value: number): number {
    return Math.log10(value);
  }

  ln(value: number): number {
    return Math.log(value);
  }

  sin(value: number): number {
    return Math.sin(value);
  }

  cos(value: number): number {
    return Math.cos(value);
  }

  tan(value: number): number {
    return Math.tan(value);
  }

  ctg(value: number): number {
    return 1 / Math.tan(value);
  }
}
