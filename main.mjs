// use mjs extension while using module js for imports and exports

// default export

// first snippet
// import addFn from "./math-esm.mjs"

// console.log(addFn(1, 2));


// second snippet
// import math from "./math-esm.mjs"

// destructuring
// const { add, subtract } = math

// console.log(add(5, 4));
// console.log(subtract(5, 4));


// note: this will not work, this syntax works for named exports
// import { add, subtract } from "./math-esm.mjs"


//////////////////////////////////////////////////////////////////////

// named export
// named exports must be imported using {} notation

// third snippet
import math from "./math-esm.mjs"
// import subFn from "./math-esm.mjs"

console.log(math);
const { add, subtract } = math

console.log(add(1, 2));
console.log(subtract(1, 2));