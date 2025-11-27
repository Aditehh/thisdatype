console.log("this da best hehde music")

// classes

class User {
    private _coursecount = 1
    public email: string
    private name: string
    readonly city: string = ""
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }

    get getappleemail(): string {
        return `apple ${this.email}`
    }

    get courseCount(): number {
        return this._coursecount;
    }

}

const hitesh = new User("aditya", "this")
console.log(hitesh.email)

// more about class
