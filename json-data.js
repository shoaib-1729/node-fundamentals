// working with json data

// importing json data
const data = require("./data.json")

console.log(data);
console.log(data.name);
console.log(data.address.city);

// running a module (file) in watch mode command:
// node --watch <filename>