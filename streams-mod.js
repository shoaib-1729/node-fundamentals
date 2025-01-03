// streams in nodejs
// steams allows to work with data in chunks rather than whole data all at once, this saves a lot of memory since we don 't have to transfer the data to a temporary memory to transfer it to a file, we simply transfer data in chunks using streams and buffers (used for storing the chunks of data)
// many built - in modules like fs and https uses streams behind the scenes
// we will be understand streams using fs module by transferring data from a file to another file
// import fs module
const fs = require("node:fs")
const readableStream = fs.createReadStream("file.txt", {
    encoding: "utf-8",
    // set custom chunk size
    highWaterMark: 2,
})

// writeable streams
const writeableStream = fs.createWriteStream("./file2.txt")

// streams are inherited from event-emitter class, hence yeh emit hote hai 'data' event par
// toh hum listen kar sakte hai 'data' event par, aur chunks ko receive kar sakte hai callback event handler mei
readableStream.on("data", (chunk) => {
    console.log(chunk);
    // writing the data chunk received in file2.txt
    writeableStream.write(chunk)
})