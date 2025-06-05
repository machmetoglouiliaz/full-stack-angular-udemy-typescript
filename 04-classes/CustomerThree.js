"use strict";
class CustomerThree {
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
// Create an instance
let customerThree = new CustomerThree("Mourat", "Achoi");
console.log(customerThree.firstName);
console.log(customerThree.lastName);
