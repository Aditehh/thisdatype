"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("this da best hehde music");
// classes
class User {
    _coursecount = 1;
    email;
    name;
    city = "";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    get getappleemail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._coursecount;
    }
}
const hitesh = new User("aditya", "this");
console.log(hitesh.email);
// more about class
//# sourceMappingURL=index.js.map