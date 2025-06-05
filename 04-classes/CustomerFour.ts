export class CustomerFour {

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