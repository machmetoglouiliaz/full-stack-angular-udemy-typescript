class CustomerThree {

    constructor(
        private _firstName: string,
        private _lastName: string
    ) { }


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
let customerThree = new CustomerThree("Mourat", "Achoi");

console.log(customerThree.firstName);
console.log(customerThree.lastName);