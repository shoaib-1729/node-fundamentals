// callback nature of js - example of synchronous nature of callbacks
function greet(name) {
    console.log(`Hello ${name}`);
}

function higherOrderFn(callbackFn) {
    let name = "Shoaib";
    // calling the greet function with the argument name defined above
    callbackFn(name);
}

// calling higher order function with a callback function
higherOrderFn(greet);



// nodejs has an asynchronous nature of callbacks to prevent blocking of execution (understanding how callback works is important to work with that async nature of nodejs)