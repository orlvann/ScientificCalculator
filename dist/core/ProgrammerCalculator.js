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
exports.ProgrammerCalculator = void 0;
var Calculator_1 = require("./Calculator");
var ProgrammerCalculator = /** @class */ (function (_super) {
    __extends(ProgrammerCalculator, _super);
    function ProgrammerCalculator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgrammerCalculator.prototype.and = function (a, b) {
        return a & b;
    };
    ProgrammerCalculator.prototype.or = function (a, b) {
        return a | b;
    };
    ProgrammerCalculator.prototype.not = function (a) {
        return ~a;
    };
    ProgrammerCalculator.prototype.xor = function (a, b) {
        return a ^ b;
    };
    ProgrammerCalculator.prototype.toDecimal = function (value, base) {
        return parseInt(value, base);
    };
    ProgrammerCalculator.prototype.fromDecimal = function (value, base) {
        return value.toString(base);
    };
    return ProgrammerCalculator;
}(Calculator_1.Calculator));
exports.ProgrammerCalculator = ProgrammerCalculator;
