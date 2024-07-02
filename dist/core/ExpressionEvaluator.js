"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressionEvaluator = void 0;
var ExpressionEvaluator = /** @class */ (function () {
    function ExpressionEvaluator() {
        this.index = 0;
        this.expression = '';
    }
    ExpressionEvaluator.prototype.evaluate = function (expression) {
        this.index = 0;
        this.expression = expression;
        return this.parseExpression();
    };
    ExpressionEvaluator.prototype.parseExpression = function () {
        var value = this.parseTerm();
        while (this.match('+') || this.match('-')) {
            var operator = this.previous();
            var right = this.parseTerm();
            if (operator === '+') {
                value += right;
            }
            else if (operator === '-') {
                value -= right;
            }
        }
        return value;
    };
    ExpressionEvaluator.prototype.parseTerm = function () {
        var value = this.parseFactor();
        while (this.match('*') || this.match('/')) {
            var operator = this.previous();
            var right = this.parseFactor();
            if (operator === '*') {
                value *= right;
            }
            else if (operator === '/') {
                if (right === 0)
                    throw new Error('Division by zero');
                value /= right;
            }
        }
        return value;
    };
    ExpressionEvaluator.prototype.parseFactor = function () {
        if (this.match('-')) {
            return -this.parseFactor();
        }
        if (this.match('(')) {
            var value = this.parseExpression();
            this.consume(')');
            return value;
        }
        if (this.match('sqrt')) {
            var value = this.parseFactor();
            return Math.sqrt(value);
        }
        if (this.match('log')) {
            var value = this.parseFactor();
            return Math.log10(value);
        }
        if (this.match('ln')) {
            var value = this.parseFactor();
            return Math.log(value);
        }
        if (this.match('sin')) {
            var value = this.parseFactor();
            return Math.sin(value);
        }
        if (this.match('cos')) {
            var value = this.parseFactor();
            return Math.cos(value);
        }
        if (this.match('tan')) {
            var value = this.parseFactor();
            return Math.tan(value);
        }
        if (this.match('!')) {
            var value = this.parseFactor();
            return this.factorial(value);
        }
        return this.parseNumber();
    };
    ExpressionEvaluator.prototype.parseNumber = function () {
        var start = this.index;
        while (this.isDigit(this.peek()))
            this.advance();
        var numberStr = this.expression.substring(start, this.index);
        return parseFloat(numberStr);
    };
    ExpressionEvaluator.prototype.match = function (char) {
        if (this.expression.substring(this.index).startsWith(char)) {
            this.index += char.length;
            return true;
        }
        return false;
    };
    ExpressionEvaluator.prototype.consume = function (char) {
        if (this.peek() === char) {
            this.advance();
        }
        else {
            throw new Error("Expected '".concat(char, "' but found '").concat(this.peek(), "'"));
        }
    };
    ExpressionEvaluator.prototype.previous = function () {
        return this.expression[this.index - 1];
    };
    ExpressionEvaluator.prototype.peek = function () {
        return this.expression[this.index];
    };
    ExpressionEvaluator.prototype.advance = function () {
        return this.expression[this.index++];
    };
    ExpressionEvaluator.prototype.isDigit = function (char) {
        return (char >= '0' && char <= '9') || char === '.';
    };
    ExpressionEvaluator.prototype.factorial = function (n) {
        if (n < 0)
            throw new Error('Negative factorial not defined');
        return n === 0 ? 1 : n * this.factorial(n - 1);
    };
    return ExpressionEvaluator;
}());
exports.ExpressionEvaluator = ExpressionEvaluator;
