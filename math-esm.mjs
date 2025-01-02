// using module js standard for import and export

// case-1 (using default export)
// default exports can be imported using any names of your choice. default exports can be used only once in a module

// pattern-1 - exporting single values

// first snippet
// const add = (a, b) => {
//     return a + b
// }

// second snippet
// export default add

// export default add = (a, b) => {
//     return a + b
// }

////////////////////////////////////////////////////

// pattern-2 - exporting multiple values

// first snippet
const add = (a, b) => {
    return a + b
}
const subtract = (a, b) => {
    return a - b
}

// export default {
//     add: add,
//     subtract: subtract,
// }

// using es6 syntax
export default {
    add,
    subtract,
}

///////////////////////////////////////////////////

// case-2 (using named export i.e. export keyword)
// named export should be imported using {}, and the same name used while exporting the same

// pattern-1 - exporting single value

// first snippet
// export const add = (a, b) => {
//     return a + b
// }

// second snippet
// const add = (a, b) => {
//     return a + b
// }

// export { add }

///////////////////////////////////////////////////

// pattern-2 - exporting multiple value

// first snippet
// export const add = (a, b) => {
//     return a + b
// }

// export const subtract = (a, b) => {
//     return a - b
// }

// second snippet
// const add = (a, b) => {
//     return a + b
// }

// const subtract = (a, b) => {
//     return a - b
// }

// export { add, subtract }

// third snippet - using combination of both default exports and named exports
// export const add = (a, b) => {
//     return a + b
// }

// const subtract = (a, b) => {
//     return a - b
// }

// export default subtract