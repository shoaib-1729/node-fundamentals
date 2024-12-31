// before assignment of exports, nothing is assigned to the export property in the module object, hence it will print {}
// console.log(module.exports);
// single value export

// first pattern
// const add = (a, b) => {
//     return a + b
// }
// module.exports = add;

// second pattern
// module.exports = (a, b) => {
//     return a + b
// }



//////////////////////////////////////////////////////

//  multiple value export

// third pattern
// const add = (a, b) => {
//     return a + b
// }
// const subtract = (a, b) => {
//     return a - b
// }
// module.exports = {
//         add: add,
//         subtract: subtract
//     }
// using es6 syntax
// module.exports = {
//     add,
//     subtract,
// }

// fourth pattern
// module.exports.add = (a, b) => {
//     return a + b
// }
// module.exports.subtract = (a, b) => {
//     return a - b
// }

// fifth pattern (not recommended)
// exports.add = (a, b) => {
//     return a + b
// }
// exports.subtract = (a, b) => {
//     return a - b
// }

// after assignment of exports
// console.log(module.exports);

// note: in this case module.exports will lost reference to exports object, and will be empty
const add = (a, b) => {
    return a + b
}
const subtract = (a, b) => {
    return a - b
}

// after brand new assignment of exports
exports = {
    add,
    subtract,
}