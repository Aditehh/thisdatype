function bananas<T>(banana: T) { // ts is a generic function where we can initialize once and can be used for different types such as string number boolean and etc;
    return banana
}

function messi(n: number): number { // this is a normal function where we have to write different functions for same type of works
    return n;
}
function messistring(n: string): string {
    return n;
}

// generic arrays

function makearray<T>(value: T): T[] {
    return [value]
}

makearray(10);
makearray("ram");
makearray({ id: 1 })



//pairing values

function pair<T>(a: T, b: T) {
    return [a, b];
}

pair(1, 2);
pair("a", "b");
// pair(1, "b"); // ts is illegal as in pair we should have values having same type


// generics for creating flexible data structures

function duo<A, B>(x: A, y: B) {
    return [x, y]
}


interface Database {
    connection: string,
    username: string,
    password: string
}


function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

// anotherFunction(3, {})

interface Quiz {
    name: string,
    type: string
}

interface course {
    name: string,
    author: string,
    subject: string
}

class Sellabe<T> {
    public cart: T[] =[]

    addToCart(product: T) {
        this.cart.push(product)
    }
}







const printfirstduo = duo(1, "apple")
const printsecondduo = duo(true, "messi")


const numberbanana = bananas(45)
const stringbanana = bananas("BANANAS")
const booleanbanana = bananas(false)

console.log(numberbanana)
console.log(stringbanana)
console.log(booleanbanana)