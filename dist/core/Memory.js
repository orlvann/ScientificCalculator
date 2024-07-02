"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memory = void 0;
var Memory = /** @class */ (function () {
    function Memory() {
        this.memoryValue = 0;
    }
    Memory.prototype.add = function (value) {
        this.memoryValue += value;
    };
    Memory.prototype.subtract = function (value) {
        this.memoryValue -= value;
    };
    Memory.prototype.recall = function () {
        return this.memoryValue;
    };
    Memory.prototype.clear = function () {
        this.memoryValue = 0;
    };
    return Memory;
}());
exports.Memory = Memory;
