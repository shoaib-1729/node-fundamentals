// file module
// importing built-in file module from node (used for file handling)
const fs = require("node:fs");

// testing purpose for async behaviour of node
console.log("First");

// read content from the file
// synchronous or block method to read content from the file
// character encoding ke bina values binary mei print karega, string mei chahiye toh encoding specify karni padegi
const data = fs.readFileSync("./file.txt", "utf-8")
console.log(data);


// read content from the file asynchronously or non-blocking manner (used more often)
fs.readFile("./file.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

// testing purpose for async behaviour of node
console.log("Second");

// writing data to file
// file exits karti hai toh data overwrite kar dega new data se, agar nahi karti hai toh pehle file create karega phir data write karega
// synchronous or blocking way to write in a file
fs.writeFileSync("./greet.txt", "Good Morning Buddy!")


// testing purpose for async behaviour of node
console.log("Third");

// asynchronous or non-blocking way to write in a file
fs.writeFile("./greet.txt", "Hello Buddy!", (err) => {
    if (err) {
        console.log(err);
    }
})

// agar mai chahta hu ki data override naa-hokar appnend ho, toh mujhe usko as a flag pass karna hoga
fs.writeFile("./greet.txt", " Hey Champ!", { flag: "a" }, (err) => {
    if (err) {
        console.log(err);
    }
})


// testing purpose for async behaviour of node
console.log("Fourth");


// Note: reading data from a file would take more time than writing operation, this happens due to the async nature of nodejs