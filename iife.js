// iife's has their own scope, hence using same variables and methods will npt conflict each other
// semi-colon is must while using an iife
(function(message) {
    const superhero = "Batman"
    console.log(message, superhero);
})("Hello");

(function(message) {
    const superhero = "Superman"
    console.log(message, superhero);
})("Hey");