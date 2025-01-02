// buffer in Node.js
// buffer is a built-in global object in Node.js, used to handle raw binary data.

// create a new buffer from a string
// the buffer has a fixed size, and any data exceeding this capacity will be truncated.
const buffer = new Buffer.from("Vishwas");


// write new data to the buffer starting from position 0 (it will overwrite existing data)
buffer.write("Code");
// write another string "Codevolution" at the next available position in the buffer
// writes "Codevolution" after "Code"
buffer.write("Codevolution");


// log the entire buffer (raw binary data)
// Displays the buffer object with its raw binary data
console.log(buffer);

// Convert the buffer to a string and log it
// Converts the raw binary data back to a string and prints it
console.log(buffer.toString());

// convert the buffer to a JSON representation
// Displays the buffer data as a JSON object (an array of bytes)
console.log(buffer.toJSON());