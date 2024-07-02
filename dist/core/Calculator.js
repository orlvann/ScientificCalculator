"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.displayValue = '';
        this.displayValue = '0';
    }
    Calculator.prototype.updateDisplay = function (value) {
        this.displayValue = value;
        // Update the display UI here
    };
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0)
            throw new Error('Division by zero');
        return a / b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
