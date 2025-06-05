"use strict";
class CustomerTwo {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
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
let customerTwo = new CustomerTwo("Mourat", "Achoi");
console.log(customerTwo.firstName);
console.log(customerTwo.lastName);
