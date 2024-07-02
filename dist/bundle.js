/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/Calculator.ts":
/*!********************************!*\
  !*** ./src/core/Calculator.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Calculator = void 0;\nvar Calculator = /** @class */ (function () {\n    function Calculator() {\n        this.displayValue = '';\n        this.displayValue = '0';\n    }\n    Calculator.prototype.updateDisplay = function (value) {\n        this.displayValue = value;\n        // Update the display UI here\n    };\n    Calculator.prototype.add = function (a, b) {\n        return a + b;\n    };\n    Calculator.prototype.subtract = function (a, b) {\n        return a - b;\n    };\n    Calculator.prototype.multiply = function (a, b) {\n        return a * b;\n    };\n    Calculator.prototype.divide = function (a, b) {\n        if (b === 0)\n            throw new Error('Division by zero');\n        return a / b;\n    };\n    return Calculator;\n}());\nexports.Calculator = Calculator;\n\n\n//# sourceURL=webpack://scientificcalculator/./src/core/Calculator.ts?");

/***/ }),

/***/ "./src/core/ExpressionEvaluator.ts":
/*!*****************************************!*\
  !*** ./src/core/ExpressionEvaluator.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ExpressionEvaluator = void 0;\nvar ExpressionEvaluator = /** @class */ (function () {\n    function ExpressionEvaluator() {\n        this.index = 0;\n        this.expression = '';\n    }\n    ExpressionEvaluator.prototype.evaluate = function (expression) {\n        this.index = 0;\n        this.expression = expression;\n        return this.parseExpression();\n    };\n    ExpressionEvaluator.prototype.parseExpression = function () {\n        var value = this.parseTerm();\n        while (this.match('+') || this.match('-')) {\n            var operator = this.previous();\n            var right = this.parseTerm();\n            if (operator === '+') {\n                value += right;\n            }\n            else if (operator === '-') {\n                value -= right;\n            }\n        }\n        return value;\n    };\n    ExpressionEvaluator.prototype.parseTerm = function () {\n        var value = this.parseFactor();\n        while (this.match('*') || this.match('/')) {\n            var operator = this.previous();\n            var right = this.parseFactor();\n            if (operator === '*') {\n                value *= right;\n            }\n            else if (operator === '/') {\n                if (right === 0)\n                    throw new Error('Division by zero');\n                value /= right;\n            }\n        }\n        return value;\n    };\n    ExpressionEvaluator.prototype.parseFactor = function () {\n        if (this.match('-')) {\n            return -this.parseFactor();\n        }\n        if (this.match('(')) {\n            var value = this.parseExpression();\n            this.consume(')');\n            return value;\n        }\n        if (this.match('sqrt')) {\n            var value = this.parseFactor();\n            return Math.sqrt(value);\n        }\n        if (this.match('log')) {\n            var value = this.parseFactor();\n            return Math.log10(value);\n        }\n        if (this.match('ln')) {\n            var value = this.parseFactor();\n            return Math.log(value);\n        }\n        if (this.match('sin')) {\n            var value = this.parseFactor();\n            return Math.sin(value);\n        }\n        if (this.match('cos')) {\n            var value = this.parseFactor();\n            return Math.cos(value);\n        }\n        if (this.match('tan')) {\n            var value = this.parseFactor();\n            return Math.tan(value);\n        }\n        if (this.match('!')) {\n            var value = this.parseFactor();\n            return this.factorial(value);\n        }\n        return this.parseNumber();\n    };\n    ExpressionEvaluator.prototype.parseNumber = function () {\n        var start = this.index;\n        while (this.isDigit(this.peek()))\n            this.advance();\n        var numberStr = this.expression.substring(start, this.index);\n        return parseFloat(numberStr);\n    };\n    ExpressionEvaluator.prototype.match = function (char) {\n        if (this.expression.substring(this.index).startsWith(char)) {\n            this.index += char.length;\n            return true;\n        }\n        return false;\n    };\n    ExpressionEvaluator.prototype.consume = function (char) {\n        if (this.peek() === char) {\n            this.advance();\n        }\n        else {\n            throw new Error(\"Expected '\".concat(char, \"' but found '\").concat(this.peek(), \"'\"));\n        }\n    };\n    ExpressionEvaluator.prototype.previous = function () {\n        return this.expression[this.index - 1];\n    };\n    ExpressionEvaluator.prototype.peek = function () {\n        return this.expression[this.index];\n    };\n    ExpressionEvaluator.prototype.advance = function () {\n        return this.expression[this.index++];\n    };\n    ExpressionEvaluator.prototype.isDigit = function (char) {\n        return (char >= '0' && char <= '9') || char === '.';\n    };\n    ExpressionEvaluator.prototype.factorial = function (n) {\n        if (n < 0)\n            throw new Error('Negative factorial not defined');\n        return n === 0 ? 1 : n * this.factorial(n - 1);\n    };\n    return ExpressionEvaluator;\n}());\nexports.ExpressionEvaluator = ExpressionEvaluator;\n\n\n//# sourceURL=webpack://scientificcalculator/./src/core/ExpressionEvaluator.ts?");

/***/ }),

/***/ "./src/core/ProgrammerCalculator.ts":
/*!******************************************!*\
  !*** ./src/core/ProgrammerCalculator.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ProgrammerCalculator = void 0;\nvar Calculator_1 = __webpack_require__(/*! ./Calculator */ \"./src/core/Calculator.ts\");\nvar ProgrammerCalculator = /** @class */ (function (_super) {\n    __extends(ProgrammerCalculator, _super);\n    function ProgrammerCalculator() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    ProgrammerCalculator.prototype.and = function (a, b) {\n        return a & b;\n    };\n    ProgrammerCalculator.prototype.or = function (a, b) {\n        return a | b;\n    };\n    ProgrammerCalculator.prototype.not = function (a) {\n        return ~a;\n    };\n    ProgrammerCalculator.prototype.xor = function (a, b) {\n        return a ^ b;\n    };\n    ProgrammerCalculator.prototype.toDecimal = function (value, base) {\n        return parseInt(value, base);\n    };\n    ProgrammerCalculator.prototype.fromDecimal = function (value, base) {\n        return value.toString(base);\n    };\n    return ProgrammerCalculator;\n}(Calculator_1.Calculator));\nexports.ProgrammerCalculator = ProgrammerCalculator;\n\n\n//# sourceURL=webpack://scientificcalculator/./src/core/ProgrammerCalculator.ts?");

/***/ }),

/***/ "./src/core/ScientificCalculator.ts":
/*!******************************************!*\
  !*** ./src/core/ScientificCalculator.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ScientificCalculator = void 0;\nvar Calculator_1 = __webpack_require__(/*! ./Calculator */ \"./src/core/Calculator.ts\");\nvar ScientificCalculator = /** @class */ (function (_super) {\n    __extends(ScientificCalculator, _super);\n    function ScientificCalculator() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    ScientificCalculator.prototype.power = function (base, exponent) {\n        return Math.pow(base, exponent);\n    };\n    ScientificCalculator.prototype.sqrt = function (value) {\n        return Math.sqrt(value);\n    };\n    ScientificCalculator.prototype.factorial = function (n) {\n        if (n < 0)\n            throw new Error('Negative factorial not defined');\n        return n === 0 ? 1 : n * this.factorial(n - 1);\n    };\n    ScientificCalculator.prototype.inverse = function (value) {\n        if (value === 0)\n            throw new Error('Division by zero');\n        return 1 / value;\n    };\n    ScientificCalculator.prototype.log = function (value) {\n        return Math.log10(value);\n    };\n    ScientificCalculator.prototype.ln = function (value) {\n        return Math.log(value);\n    };\n    ScientificCalculator.prototype.sin = function (value, inDegrees) {\n        if (inDegrees === void 0) { inDegrees = false; }\n        return inDegrees ? Math.sin(value * (Math.PI / 180)) : Math.sin(value);\n    };\n    ScientificCalculator.prototype.cos = function (value, inDegrees) {\n        if (inDegrees === void 0) { inDegrees = false; }\n        return inDegrees ? Math.cos(value * (Math.PI / 180)) : Math.cos(value);\n    };\n    ScientificCalculator.prototype.tan = function (value, inDegrees) {\n        if (inDegrees === void 0) { inDegrees = false; }\n        return inDegrees ? Math.tan(value * (Math.PI / 180)) : Math.tan(value);\n    };\n    ScientificCalculator.prototype.ctg = function (value, inDegrees) {\n        if (inDegrees === void 0) { inDegrees = false; }\n        return 1 / this.tan(value, inDegrees);\n    };\n    return ScientificCalculator;\n}(Calculator_1.Calculator));\nexports.ScientificCalculator = ScientificCalculator;\n\n\n//# sourceURL=webpack://scientificcalculator/./src/core/ScientificCalculator.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar UI_1 = __webpack_require__(/*! ./ui/UI */ \"./src/ui/UI.ts\");\ndocument.addEventListener('DOMContentLoaded', function () {\n    var ui = new UI_1.UI('display');\n});\n\n\n//# sourceURL=webpack://scientificcalculator/./src/main.ts?");

/***/ }),

/***/ "./src/ui/UI.ts":
/*!**********************!*\
  !*** ./src/ui/UI.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UI = void 0;\nvar Calculator_1 = __webpack_require__(/*! ../core/Calculator */ \"./src/core/Calculator.ts\");\nvar ScientificCalculator_1 = __webpack_require__(/*! ../core/ScientificCalculator */ \"./src/core/ScientificCalculator.ts\");\nvar ProgrammerCalculator_1 = __webpack_require__(/*! ../core/ProgrammerCalculator */ \"./src/core/ProgrammerCalculator.ts\");\nvar ExpressionEvaluator_1 = __webpack_require__(/*! ../core/ExpressionEvaluator */ \"./src/core/ExpressionEvaluator.ts\");\nvar UI = /** @class */ (function () {\n    function UI(displayElementId) {\n        this.calculator = new Calculator_1.Calculator();\n        this.scientificCalculator = new ScientificCalculator_1.ScientificCalculator();\n        this.programmerCalculator = new ProgrammerCalculator_1.ProgrammerCalculator();\n        this.evaluator = new ExpressionEvaluator_1.ExpressionEvaluator();\n        this.currentMode = 'standard';\n        this.displayElement = document.getElementById(displayElementId); // Non-null assertion\n        if (!this.displayElement) {\n            throw new Error(\"Element with id \".concat(displayElementId, \" not found.\"));\n        }\n        this.isDegrees = true;\n        this.memory = 0;\n        this.initializeUI();\n    }\n    UI.prototype.initializeUI = function () {\n        this.setupEventHandlers();\n        this.updateDisplay('0');\n    };\n    UI.prototype.setupEventHandlers = function () {\n        var _this = this;\n        document.querySelectorAll('.calculator-button').forEach(function (button) {\n            button.addEventListener('click', function (event) {\n                var buttonValue = event.target.textContent;\n                _this.onButtonClick(buttonValue);\n            });\n        });\n        document\n            .getElementById('switch-to-standard')\n            .addEventListener('click', function () { return _this.switchToStandardCalculator(); });\n        document\n            .getElementById('switch-to-scientific')\n            .addEventListener('click', function () { return _this.switchToScientificCalculator(); });\n        document\n            .getElementById('switch-to-programmer')\n            .addEventListener('click', function () { return _this.switchToProgrammerCalculator(); });\n        document\n            .getElementById('toggleMode')\n            .addEventListener('click', function () { return _this.toggleMode(); });\n    };\n    UI.prototype.onButtonClick = function (buttonValue) {\n        if (!isNaN(Number(buttonValue)) || buttonValue === '.') {\n            this.handleNumberInput(buttonValue);\n        }\n        else {\n            this.handleFunctionInput(buttonValue);\n        }\n    };\n    UI.prototype.handleNumberInput = function (buttonValue) {\n        if (this.displayElement.textContent === '0') {\n            this.updateDisplay(buttonValue);\n        }\n        else {\n            this.updateDisplay(this.displayElement.textContent + buttonValue);\n        }\n    };\n    UI.prototype.handleFunctionInput = function (buttonValue) {\n        var result;\n        try {\n            switch (buttonValue) {\n                case 'C':\n                    this.updateDisplay('0');\n                    break;\n                case 'CE':\n                    this.updateDisplay('0');\n                    break;\n                case '=':\n                    result = this.evaluator.evaluate(this.displayElement.textContent);\n                    this.updateDisplay(result.toString());\n                    break;\n                case 'M+':\n                    this.memory += parseFloat(this.displayElement.textContent);\n                    break;\n                case 'M-':\n                    this.memory -= parseFloat(this.displayElement.textContent);\n                    break;\n                case 'MR':\n                    this.updateDisplay(this.memory.toString());\n                    break;\n                case 'MC':\n                    this.memory = 0;\n                    break;\n                default:\n                    // Handle other functions based on the current mode\n                    switch (this.currentMode) {\n                        case 'standard':\n                            result = this.handleStandardInput(buttonValue);\n                            break;\n                        case 'scientific':\n                            result = this.handleScientificInput(buttonValue);\n                            break;\n                        case 'programmer':\n                            result = this.handleProgrammerInput(buttonValue);\n                            break;\n                        default:\n                            result = 0;\n                    }\n                    this.updateDisplay(result.toString());\n                    break;\n            }\n        }\n        catch (error) {\n            this.updateDisplay('Error');\n        }\n    };\n    UI.prototype.handleStandardInput = function (buttonValue) {\n        var value = parseFloat(this.displayElement.textContent);\n        switch (buttonValue) {\n            case '+':\n            case '-':\n            case '*':\n            case '/':\n                return this.evaluator.evaluate(this.displayElement.textContent + buttonValue);\n            case '+/-':\n                return value * -1;\n            case '%':\n                return value / 100;\n            case '√':\n                return Math.sqrt(value);\n            case '1/x':\n                return 1 / value;\n            default:\n                return value;\n        }\n    };\n    UI.prototype.handleScientificInput = function (buttonValue) {\n        var value = parseFloat(this.displayElement.textContent);\n        switch (buttonValue) {\n            case 'sin':\n                return this.isDegrees\n                    ? Math.sin((value * Math.PI) / 180)\n                    : Math.sin(value);\n            case 'cos':\n                return this.isDegrees\n                    ? Math.cos((value * Math.PI) / 180)\n                    : Math.cos(value);\n            case 'tan':\n                return this.isDegrees\n                    ? Math.tan((value * Math.PI) / 180)\n                    : Math.tan(value);\n            case 'ctg':\n                return this.isDegrees\n                    ? 1 / Math.tan((value * Math.PI) / 180)\n                    : 1 / Math.tan(value);\n            case 'ln':\n                return Math.log(value);\n            case 'log':\n                return Math.log10(value);\n            case '^2':\n                return Math.pow(value, 2);\n            case '!':\n                return this.factorial(value);\n            default:\n                return value;\n        }\n    };\n    UI.prototype.handleProgrammerInput = function (buttonValue) {\n        var value = parseInt(this.displayElement.textContent, 10);\n        switch (buttonValue) {\n            case 'toBin':\n                this.updateDisplay(value.toString(2));\n                return value;\n            case 'toHex':\n                this.updateDisplay(value.toString(16));\n                return value;\n            case 'toOct':\n                this.updateDisplay(value.toString(8));\n                return value;\n            case 'and':\n                return value & value;\n            case 'or':\n                return value | value;\n            case 'xor':\n                return value ^ value;\n            case 'not':\n                return ~value;\n            default:\n                return value;\n        }\n    };\n    UI.prototype.factorial = function (n) {\n        if (n < 0)\n            throw new Error('Negative factorial not defined');\n        return n === 0 ? 1 : n * this.factorial(n - 1);\n    };\n    UI.prototype.switchToStandardCalculator = function () {\n        this.currentMode = 'standard';\n        this.calculator = new Calculator_1.Calculator();\n        this.updateDisplay('0');\n    };\n    UI.prototype.switchToScientificCalculator = function () {\n        this.currentMode = 'scientific';\n        this.calculator = new ScientificCalculator_1.ScientificCalculator();\n        this.updateDisplay('0');\n    };\n    UI.prototype.switchToProgrammerCalculator = function () {\n        this.currentMode = 'programmer';\n        this.calculator = new ProgrammerCalculator_1.ProgrammerCalculator();\n        this.updateDisplay('0');\n    };\n    UI.prototype.toggleMode = function () {\n        this.isDegrees = !this.isDegrees;\n        document.getElementById('toggleMode').textContent = this.isDegrees\n            ? 'Deg'\n            : 'Rad';\n    };\n    UI.prototype.updateDisplay = function (value) {\n        this.displayElement.textContent = value;\n    };\n    return UI;\n}());\nexports.UI = UI;\n\n\n//# sourceURL=webpack://scientificcalculator/./src/ui/UI.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;