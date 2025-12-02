"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bananas(banana) {
    return banana;
}
function messi(n) {
    return n;
}
function messistring(n) {
    return n;
}
// generic arrays
function makearray(value) {
    return [value];
}
makearray(10);
makearray("ram");
makearray({ id: 1 });
//pairing values
function pair(a, b) {
    return [a, b];
}
pair(1, 2);
pair("a", "b");
// pair(1, "b"); // ts is illegal as in pair we should have values having same type
// generics for creating flexible data structures
function duo(x, y) {
    return [x, y];
}
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellabe {
    cart = [];
}
const printfirstduo = duo(1, "apple");
const printsecondduo = duo(true, "messi");
const numberbanana = bananas(45);
const stringbanana = bananas("BANANAS");
const booleanbanana = bananas(false);
console.log(numberbanana);
console.log(stringbanana);
console.log(booleanbanana);
//# sourceMappingURL=generics.js.map