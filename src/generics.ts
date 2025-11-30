//generics in ts called typescript

const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}


function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

// identityThree(3)

function identityFour<T>(val: T) {
    return val
}

interface Bottle {
    brand: string,
    type: number
}

identityFour<Bottle>({ brand: "samsung", type: 55 })


// how array work in generics