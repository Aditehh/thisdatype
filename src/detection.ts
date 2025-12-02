function detectType(val: number | string) {
    if (typeof val === "string") {
        val.toLowerCase
    }
    if (typeof val === "number") {
        return val + 3
    }
}

function provideId(id: string | null) {
    if (!id) {
        console.log("please provide your Id");
        return
    }
    id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}

interface User {
    name: string,
    email: string,
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isUserAdmin(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
        // console.log("yes")
    }
    else {
        console.log("no")
    }
}

//instanceof narrowing
function logVlaue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}



type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish { //"pet is Fish" mean that if the function return true, then pet is 100% Fish
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) { //we gave the function a pet could be fish or bird we dont know
    if (isFish(pet)) { // if the isFish() returns true --> the pet is Fish
        pet
        return "fish food"
    } else {
        pet
        return "bird food"
    }
}




//discriminated unions

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle
function getTrueShape(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side


}


//The never type

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width
        default:
            const _defaultForShape: never = shape
            return _defaultForShape
    }
}

//exhaustiveness checking 