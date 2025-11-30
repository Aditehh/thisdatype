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

function pair<T>(a: T, b:T) {
    return [a,b];
}

pair(1,2);
pair("a", "b");
pair(1,"b"); // ts is illegal as in pair we should have values having same type



const numberbanana = bananas(45)
const stringbanana = bananas("BANANAS")
const booleanbanana = bananas(false)

console.log(numberbanana)
console.log(stringbanana)
console.log(booleanbanana)