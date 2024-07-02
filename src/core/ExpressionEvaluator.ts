export class ExpressionEvaluator {
  private index: number;
  private expression: string;

  constructor() {
    this.index = 0;
    this.expression = '';
  }

  public evaluate(expression: string): number {
    this.index = 0;
    this.expression = expression;
    return this.parseExpression();
  }

  private parseExpression(): number {
    let value = this.parseTerm();
    while (this.match('+') || this.match('-')) {
      const operator = this.previous();
      const right = this.parseTerm();
      if (operator === '+') {
        value += right;
      } else if (operator === '-') {
        value -= right;
      }
    }
    return value;
  }

  private parseTerm(): number {
    let value = this.parseFactor();
    while (this.match('*') || this.match('/')) {
      const operator = this.previous();
      const right = this.parseFactor();
      if (operator === '*') {
        value *= right;
      } else if (operator === '/') {
        if (right === 0) throw new Error('Division by zero');
        value /= right;
      }
    }
    return value;
  }

  private parseFactor(): number {
    if (this.match('-')) {
      return -this.parseFactor();
    }

    if (this.match('(')) {
      const value = this.parseExpression();
      this.consume(')');
      return value;
    }

    return this.parseNumber();
  }

  private parseNumber(): number {
    let start = this.index;
    while (this.isDigit(this.peek())) this.advance();
    const numberStr = this.expression.substring(start, this.index);
    return parseFloat(numberStr);
  }

  private match(char: string): boolean {
    if (this.peek() === char) {
      this.advance();
      return true;
    }
    return false;
  }

  private consume(char: string) {
    if (this.peek() === char) {
      this.advance();
    } else {
      throw new Error(`Expected '${char}' but found '${this.peek()}'`);
    }
  }

  private previous(): string {
    return this.expression[this.index - 1];
  }

  private peek(): string {
    return this.expression[this.index];
  }

  private advance(): string {
    return this.expression[this.index++];
  }

  private isDigit(char: string): boolean {
    return (char >= '0' && char <= '9') || char === '.';
  }
}
