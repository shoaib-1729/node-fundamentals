// local or user-defined modules
// const localModules = require('./path-to-module)
// built-in modules
// const fs = require('node:fs);

// using external modules
// usage ke liye documentation padho npm ki
import { swapCase } from "swap-case";

// greet function
function greet(name) {
    console.log(swapCase(`hey ${name}, welcome to code-evolution!`));
}

greet("shoaib");

// export
export default greet;


// global packages
// global packages code mei use nhi kari jaati hai, woh command line mei use hoti hai isi wajah se unhei system par globally install karna padta hai har developer ko, eg: packages like nodemon joh node ke watch feature ki tarah kaam karti hai
// uninstall global packages using command: npm uninstall -g <package-name>