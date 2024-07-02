"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScientificCalculator = void 0;
var Calculator_1 = require("./Calculator");
var ScientificCalculator = /** @class */ (function (_super) {
    __extends(ScientificCalculator, _super);
    function ScientificCalculator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScientificCalculator.prototype.power = function (base, exponent) {
        return Math.pow(base, exponent);
    };
    ScientificCalculator.prototype.sqrt = function (value) {
        return Math.sqrt(value);
    };
    ScientificCalculator.prototype.factorial = function (n) {
        if (n < 0)
            throw new Error('Negative factorial not defined');
        return n === 0 ? 1 : n * this.factorial(n - 1);
    };
    ScientificCalculator.prototype.inverse = function (value) {
        if (value === 0)
            throw new Error('Division by zero');
        return 1 / value;
    };
    ScientificCalculator.prototype.log = function (value) {
        return Math.log10(value);
    };
    ScientificCalculator.prototype.ln = function (value) {
        return Math.log(value);
    };
    ScientificCalculator.prototype.sin = function (value, inDegrees) {
        if (inDegrees === void 0) { inDegrees = false; }
        return inDegrees ? Math.sin(value * (Math.PI / 180)) : Math.sin(value);
    };
    ScientificCalculator.prototype.cos = function (value, inDegrees) {
        if (inDegrees === void 0) { inDegrees = false; }
        return inDegrees ? Math.cos(value * (Math.PI / 180)) : Math.cos(value);
    };
    ScientificCalculator.prototype.tan = function (value, inDegrees) {
        if (inDegrees === void 0) { inDegrees = false; }
        return inDegrees ? Math.tan(value * (Math.PI / 180)) : Math.tan(value);
    };
    ScientificCalculator.prototype.ctg = function (value, inDegrees) {
        if (inDegrees === void 0) { inDegrees = false; }
        return 1 / this.tan(value, inDegrees);
    };
    return ScientificCalculator;
}(Calculator_1.Calculator));
exports.ScientificCalculator = ScientificCalculator;
