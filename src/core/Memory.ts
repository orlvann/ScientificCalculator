export class Memory {
  private memoryValue: number = 0;

  add(value: number) {
    this.memoryValue += value;
  }

  subtract(value: number) {
    this.memoryValue -= value;
  }

  recall(): number {
    return this.memoryValue;
  }

  clear() {
    this.memoryValue = 0;
  }
}
