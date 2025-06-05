"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerFour = void 0;
class CustomerFour {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        this._firstName = firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
}
exports.CustomerFour = CustomerFour;
