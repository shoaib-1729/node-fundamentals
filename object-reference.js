// exports vs module.exports
// why it is not recommended to use exports in place of module.exports?

// here, obj1 is module.exports and obj2 is acting as exports
// exports is just a reference to module.exports, whereas, module.exports is the one that is being returned from a module by require function 

// case-1
// let obj1 = {
//       name: "Bruce Wayne"
// }

// const obj2 = obj1;

// obj2.name = "Clark Kent"

// console.log(obj1);

// case-2
let obj1 = {
    name: "Bruce Wayne"
}

let obj2 = obj1;

// assigning a brand new object to obj will break the reference of obj2 to obj1, and now obj1 will be intact since it has not been modified
obj2 = {
    name: "Clark Kent"
}

console.log(obj1);