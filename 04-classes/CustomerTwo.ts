class CustomerTwo {

    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {

        this._firstName = firstName;
        this._lastName = lastName;

    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName: string) {
        this._firstName = firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName: string) {
        this._lastName = lastName;
    }


}

// Create an instance
let customerTwo = new CustomerTwo("Mourat", "Achoi");

console.log(customerTwo.firstName);
console.log(customerTwo.lastName);