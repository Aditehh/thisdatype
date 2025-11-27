console.log("this da best hehde music")

// classes

class User {
    protected _coursecount = 1
    public email: string
    private name: string
    readonly city: string = ""
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }

    private deleteToken() {
        console.log("token deleted")
    }

    get getappleemail(): string {
        return `apple ${this.email}`
    }

    get courseCount(): number {
        return this._coursecount;
    }


    //setter function doesnt have any return type
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more that 1")
        }
        this._coursecount = courseNum;
    }
}

class SubUser extends User {
    isfamily: boolean = true
    changecoursecount() {
        this._coursecount = 4
    }
}




const hitesh = new User("aditya", "this")
console.log(hitesh.email)

// more about class
