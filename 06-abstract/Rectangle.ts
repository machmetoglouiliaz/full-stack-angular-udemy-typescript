import { Shape } from "./Shape";

export class Rectangle extends Shape {
    

    constructor(x: number, y: number,
        private _width: number,
        private _length: number
    ) {
        super(x, y);
    }

    get width(): number {
        return this._width;
    }

    set width(width: number) {
        this._width = width;
    }

    get length(): number {
        return this._length;
    }

    set length(length: number) {
        this._length = length;
    }

    getInfo(): string {
        return super.getInfo() + ` width=${this._width} length=${this._length}`;
    }

    calculateArea(): number {
        return this._width * this._length;
    }
}