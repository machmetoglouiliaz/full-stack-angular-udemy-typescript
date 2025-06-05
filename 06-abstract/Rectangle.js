"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(x, y, _width, _length) {
        super(x, y);
        this._width = _width;
        this._length = _length;
    }
    get width() {
        return this._width;
    }
    set width(width) {
        this._width = width;
    }
    get length() {
        return this._length;
    }
    set length(length) {
        this._length = length;
    }
    getInfo() {
        return super.getInfo() + ` width=${this._width} length=${this._length}`;
    }
    calculateArea() {
        return this._width * this._length;
    }
}
exports.Rectangle = Rectangle;
