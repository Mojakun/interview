
export default class User {
    constructor(data) {
        this._data = data;
    }

    get id() {
        return this._data.id;
    }

    get name() {
        return this._data.name
    }

    get email() {
        return this._data.email
    }


    get data() {
        return {
            id: this.id,
            name: this.name,
            email: this.email
        };
    }
}