// use mjs extension while using module js for imports and exports

// default export
// import addFn from "./math-esm.mjs"

// console.log(addFn(1, 2));


// pattern-2
// import math from "./math-esm.mjs"

// destructuring
// const { add, subtract } = math

// console.log(add(5, 4));
// console.log(subtract(5, 4));


// note: this will not work, this syntax works for named exports
// or destructure while importing
// import { add, subtract } from "./math-esm.mjs"


//////////////////////////////////////////////////////////////////////

// named export
// named exports must be imported using {} notation
import { add } from "./math-esm.mjs"
import subFn from "./math-esm.mjs"

console.log(add(1, 2));
console.log(subFn(1, 2));