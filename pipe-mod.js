// using pipes we can transfer readable stream to writable streams
// copy pasting the stream code, and modifying it using pipes
// const fs = require("node:fs")
// const readableStream = fs.createReadStream("file.txt", {
//     encoding: "utf-8",
//     // set custom chunk size
//     highWaterMark: 2,
// })

// // writeable streams
// const writeableStream = fs.createWriteStream("./file2.txt")

// // there is no need of events, we use pipes instead to transfer data from readable stream to writable stream
// readableStream.pipe(writeableStream)


// readableStream.on("data", (chunk) => {
//     console.log(chunk);
//     // writing the data chunk received in file2.txt
//     writeableStream.write(chunk)
// })


///////////////////////////////////////////////////////////////////////////

// pipe chaining
// pipe chaining only works with readable, duplex, and transform streams, not writeable streams
// hence we will use zlib module which will convert readable stream to transform stream by compressing using gzip
const fs = require("node:fs")
const zlib = require("node:zlib")

// gzip
// gzip is the transform stream
const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("file.txt", {
    encoding: "utf-8",
    // set custom chunk size
    highWaterMark: 2,
})

// pipe chaining
// readable streams to transform streams to writeable streams
readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))


// writeable streams
const writeableStream = fs.createWriteStream("./file2.txt")

readableStream.pipe(writeableStream)