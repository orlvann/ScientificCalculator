"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI = void 0;
var Calculator_1 = require("../core/Calculator");
var ScientificCalculator_1 = require("../core/ScientificCalculator");
var ProgrammerCalculator_1 = require("../core/ProgrammerCalculator");
var ExpressionEvaluator_1 = require("../core/ExpressionEvaluator");
var UI = /** @class */ (function () {
    function UI(displayElementId) {
        this.calculator = new Calculator_1.Calculator();
        this.scientificCalculator = new ScientificCalculator_1.ScientificCalculator();
        this.programmerCalculator = new ProgrammerCalculator_1.ProgrammerCalculator();
        this.evaluator = new ExpressionEvaluator_1.ExpressionEvaluator();
        this.currentMode = 'standard';
        this.displayElement = document.getElementById(displayElementId); // Non-null assertion
        if (!this.displayElement) {
            throw new Error("Element with id ".concat(displayElementId, " not found."));
        }
        this.isDegrees = true;
        this.memory = 0;
        this.initializeUI();
    }
    UI.prototype.initializeUI = function () {
        this.setupEventHandlers();
        this.updateDisplay('0');
    };
    UI.prototype.setupEventHandlers = function () {
        var _this = this;
        document.querySelectorAll('.calculator-button').forEach(function (button) {
            button.addEventListener('click', function (event) {
                var buttonValue = event.target.textContent;
                _this.onButtonClick(buttonValue);
            });
        });
        document
            .getElementById('switch-to-standard')
            .addEventListener('click', function () { return _this.switchToStandardCalculator(); });
        document
            .getElementById('switch-to-scientific')
            .addEventListener('click', function () { return _this.switchToScientificCalculator(); });
        document
            .getElementById('switch-to-programmer')
            .addEventListener('click', function () { return _this.switchToProgrammerCalculator(); });
        document
            .getElementById('toggleMode')
            .addEventListener('click', function () { return _this.toggleMode(); });
    };
    UI.prototype.onButtonClick = function (buttonValue) {
        if (!isNaN(Number(buttonValue)) || buttonValue === '.') {
            this.handleNumberInput(buttonValue);
        }
        else {
            this.handleFunctionInput(buttonValue);
        }
    };
    UI.prototype.handleNumberInput = function (buttonValue) {
        if (this.displayElement.textContent === '0') {
            this.updateDisplay(buttonValue);
        }
        else {
            this.updateDisplay(this.displayElement.textContent + buttonValue);
        }
    };
    UI.prototype.handleFunctionInput = function (buttonValue) {
        var result;
        try {
            switch (buttonValue) {
                case 'C':
                    this.updateDisplay('0');
                    break;
                case 'CE':
                    this.updateDisplay('0');
                    break;
                case '=':
                    result = this.evaluator.evaluate(this.displayElement.textContent);
                    this.updateDisplay(result.toString());
                    break;
                case 'M+':
                    this.memory += parseFloat(this.displayElement.textContent);
                    break;
                case 'M-':
                    this.memory -= parseFloat(this.displayElement.textContent);
                    break;
                case 'MR':
                    this.updateDisplay(this.memory.toString());
                    break;
                case 'MC':
                    this.memory = 0;
                    break;
                default:
                    // Handle other functions based on the current mode
                    switch (this.currentMode) {
                        case 'standard':
                            result = this.handleStandardInput(buttonValue);
                            break;
                        case 'scientific':
                            result = this.handleScientificInput(buttonValue);
                            break;
                        case 'programmer':
                            result = this.handleProgrammerInput(buttonValue);
                            break;
                        default:
                            result = 0;
                    }
                    this.updateDisplay(result.toString());
                    break;
            }
        }
        catch (error) {
            this.updateDisplay('Error');
        }
    };
    UI.prototype.handleStandardInput = function (buttonValue) {
        var value = parseFloat(this.displayElement.textContent);
        switch (buttonValue) {
            case '+':
            case '-':
            case '*':
            case '/':
                return this.evaluator.evaluate(this.displayElement.textContent + buttonValue);
            case '+/-':
                return value * -1;
            case '%':
                return value / 100;
            case '√':
                return Math.sqrt(value);
            case '1/x':
                return 1 / value;
            default:
                return value;
        }
    };
    UI.prototype.handleScientificInput = function (buttonValue) {
        var value = parseFloat(this.displayElement.textContent);
        switch (buttonValue) {
            case 'sin':
                return this.isDegrees
                    ? Math.sin((value * Math.PI) / 180)
                    : Math.sin(value);
            case 'cos':
                return this.isDegrees
                    ? Math.cos((value * Math.PI) / 180)
                    : Math.cos(value);
            case 'tan':
                return this.isDegrees
                    ? Math.tan((value * Math.PI) / 180)
                    : Math.tan(value);
            case 'ctg':
                return this.isDegrees
                    ? 1 / Math.tan((value * Math.PI) / 180)
                    : 1 / Math.tan(value);
            case 'ln':
                return Math.log(value);
            case 'log':
                return Math.log10(value);
            case '^2':
                return Math.pow(value, 2);
            case '!':
                return this.factorial(value);
            default:
                return value;
        }
    };
    UI.prototype.handleProgrammerInput = function (buttonValue) {
        var value = parseInt(this.displayElement.textContent, 10);
        switch (buttonValue) {
            case 'toBin':
                this.updateDisplay(value.toString(2));
                return value;
            case 'toHex':
                this.updateDisplay(value.toString(16));
                return value;
            case 'toOct':
                this.updateDisplay(value.toString(8));
                return value;
            case 'and':
                return value & value;
            case 'or':
                return value | value;
            case 'xor':
                return value ^ value;
            case 'not':
                return ~value;
            default:
                return value;
        }
    };
    UI.prototype.factorial = function (n) {
        if (n < 0)
            throw new Error('Negative factorial not defined');
        return n === 0 ? 1 : n * this.factorial(n - 1);
    };
    UI.prototype.switchToStandardCalculator = function () {
        this.currentMode = 'standard';
        this.calculator = new Calculator_1.Calculator();
        this.updateDisplay('0');
    };
    UI.prototype.switchToScientificCalculator = function () {
        this.currentMode = 'scientific';
        this.calculator = new ScientificCalculator_1.ScientificCalculator();
        this.updateDisplay('0');
    };
    UI.prototype.switchToProgrammerCalculator = function () {
        this.currentMode = 'programmer';
        this.calculator = new ProgrammerCalculator_1.ProgrammerCalculator();
        this.updateDisplay('0');
    };
    UI.prototype.toggleMode = function () {
        this.isDegrees = !this.isDegrees;
        document.getElementById('toggleMode').textContent = this.isDegrees
            ? 'Deg'
            : 'Rad';
    };
    UI.prototype.updateDisplay = function (value) {
        this.displayElement.textContent = value;
    };
    return UI;
}());
exports.UI = UI;
