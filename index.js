// require the module (using common js)
// require keyword will load the module
// if exposed certain parts of the program, require method will return those parts
// exposed parts (if functions) can be called any number of times
// modules using the same variables and methods will not be conflict each other because of the use of IIFE's behind the scenes by nodejs (iife has their own independent scope)


// // module caching
// const superHero = require("./super-hero")
//     // get the name
// console.log(superHero.getName());
// // set the name
// superHero.setName("Superman")
// console.log(superHero.getName());
// // requiring same module once again
// // node.js will not load the module again, it uses the cached value
// const newSuperHero = require("./super-hero")
// console.log(newSuperHero.getName());

// // class
// const Superhero = require("./super-hero")

// // first instance
// const batman = new Superhero("Batman")
// console.log(batman.getName())
// batman.setName("Bruce Wayne")
// console.log(batman.getName())

// // another instance
// const superman = new Superhero("Superman")
// console.log(superman.getName());

// import/export patterns
const mathFn = require("./math")
console.log(mathFn.add(2, 3))
console.log(mathFn.subtract(2, 3))