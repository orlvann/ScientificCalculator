import { Calculator } from '../core/Calculator';
import { ScientificCalculator } from '../core/ScientificCalculator';
import { ProgrammerCalculator } from '../core/ProgrammerCalculator';
import { ExpressionEvaluator } from '../core/ExpressionEvaluator';

export class UI {
  private calculator: Calculator;
  private scientificCalculator: ScientificCalculator;
  private programmerCalculator: ProgrammerCalculator;
  private evaluator: ExpressionEvaluator;
  private displayElement: HTMLElement;
  private isDegrees: boolean;
  private memory: number;
  private firstOperand: number | null;
  private operator: string | null;

  constructor(displayElementId: string) {
    this.calculator = new Calculator();
    this.scientificCalculator = new ScientificCalculator();
    this.programmerCalculator = new ProgrammerCalculator();
    this.evaluator = new ExpressionEvaluator();
    this.displayElement = document.getElementById(displayElementId)!; // Non-null assertion
    if (!this.displayElement) {
      throw new Error(`Element with id ${displayElementId} not found.`);
    }
    this.isDegrees = true;
    this.memory = 0;
    this.firstOperand = null;
    this.operator = null;
    this.initializeUI();
  }

  private initializeUI() {
    this.setupEventHandlers();
    this.updateDisplay('0');
  }

  private setupEventHandlers() {
    document.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', (event: Event) => {
        const buttonValue = (event.target as HTMLButtonElement).textContent!;
        this.onButtonClick(buttonValue);
      });
    });

    document
      .getElementById('toggleMode')!
      .addEventListener('click', () => this.toggleMode());
  }

  private onButtonClick(buttonValue: string) {
    console.log('Button clicked:', buttonValue);
    if (!isNaN(Number(buttonValue)) || buttonValue === '.') {
      this.handleNumberInput(buttonValue);
    } else {
      this.handleFunctionInput(buttonValue);
    }
  }

  private handleNumberInput(buttonValue: string) {
    if (this.displayElement.textContent === '0') {
      this.updateDisplay(buttonValue);
    } else {
      this.updateDisplay(this.displayElement.textContent! + buttonValue);
    }
  }

  private handleFunctionInput(buttonValue: string) {
    console.log('Function input:', buttonValue);
    let result: number;
    try {
      switch (buttonValue) {
        case 'C':
        case 'CE':
          this.updateDisplay('0');
          this.firstOperand = null;
          this.operator = null;
          break;
        case '=':
          if (this.operator && this.firstOperand !== null) {
            result = this.handleOperation(
              this.operator,
              this.firstOperand,
              parseFloat(this.displayElement.textContent!)
            );
            this.updateDisplay(result.toString());
            this.firstOperand = null;
            this.operator = null;
          }
          break;
        case 'M+':
          this.memory += parseFloat(this.displayElement.textContent!);
          break;
        case 'M-':
          this.memory -= parseFloat(this.displayElement.textContent!);
          break;
        case 'MR':
          this.updateDisplay(this.memory.toString());
          break;
        case 'MC':
          this.memory = 0;
          break;
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
        case '^2':
        case '√':
        case '1/x':
        case 'and':
        case 'or':
        case 'xor':
        case 'not':
          this.firstOperand = parseFloat(this.displayElement.textContent!);
          this.operator = buttonValue;
          this.updateDisplay('0');
          break;
        case 'sin':
        case 'cos':
        case 'tan':
        case 'ctg':
        case 'log':
        case 'ln':
        case '!':
          result = this.handleScientificInput(buttonValue);
          this.updateDisplay(result.toString());
          break;
        case 'toBin':
        case 'toHex':
        case 'toOct':
          result = this.handleConversion(buttonValue);
          this.updateDisplay(result.toString());
          break;
        case '+/-':
          this.updateDisplay(
            (parseFloat(this.displayElement.textContent!) * -1).toString()
          );
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(error);
      this.updateDisplay('Error');
    }
  }

  private handleOperation(
    operator: string,
    firstOperand: number,
    secondOperand: number
  ): number {
    console.log(`Operation: ${firstOperand} ${operator} ${secondOperand}`);
    switch (operator) {
      case '+':
        return this.calculator.add(firstOperand, secondOperand);
      case '-':
        return this.calculator.subtract(firstOperand, secondOperand);
      case '*':
        return this.calculator.multiply(firstOperand, secondOperand);
      case '/':
        return this.calculator.divide(firstOperand, secondOperand);
      case '%':
        return this.calculator.percent(firstOperand);
      case '^2':
        return this.scientificCalculator.power(firstOperand, 2);
      case '√':
        return this.scientificCalculator.sqrt(firstOperand);
      case '1/x':
        return this.scientificCalculator.reciprocal(firstOperand);
      case 'and':
        return this.programmerCalculator.and(firstOperand, secondOperand);
      case 'or':
        return this.programmerCalculator.or(firstOperand, secondOperand);
      case 'xor':
        return this.programmerCalculator.xor(firstOperand, secondOperand);
      case 'not':
        return this.programmerCalculator.not(firstOperand);
      default:
        return secondOperand;
    }
  }

  private handleScientificInput(buttonValue: string): number {
    const value = parseFloat(this.displayElement.textContent!);
    console.log(`Scientific input: ${buttonValue}(${value})`);
    switch (buttonValue) {
      case 'sin':
        return this.scientificCalculator.sin(value, this.isDegrees);
      case 'cos':
        return this.scientificCalculator.cos(value, this.isDegrees);
      case 'tan':
        return this.scientificCalculator.tan(value, this.isDegrees);
      case 'ctg':
        return this.scientificCalculator.cot(value, this.isDegrees);
      case 'log':
        return this.scientificCalculator.log(value);
      case 'ln':
        return this.scientificCalculator.ln(value);
      case '!':
        return this.scientificCalculator.factorial(value);
      default:
        return value;
    }
  }

  private handleConversion(buttonValue: string): number {
    const value = parseInt(this.displayElement.textContent!, 10);
    console.log(`Conversion: ${buttonValue}(${value})`);
    switch (buttonValue) {
      case 'toBin':
        this.updateDisplay(this.programmerCalculator.toBinary(value));
        return value;
      case 'toHex':
        this.updateDisplay(this.programmerCalculator.toHex(value));
        return value;
      case 'toOct':
        this.updateDisplay(this.programmerCalculator.toOctal(value));
        return value;
      default:
        return value;
    }
  }

  private toggleMode() {
    this.isDegrees = !this.isDegrees;
    document.getElementById('toggleMode')!.textContent = this.isDegrees
      ? 'Deg'
      : 'Rad';
  }

  private updateDisplay(value: string) {
    this.displayElement.textContent = value;
  }
}
