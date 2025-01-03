// file handling in js using promises
// import
const fs = require("node:fs/promises")

// since, this is the  implementation of the file module using promises, then-catch block can be used here
fs.readFile("./file.txt", "utf-8")
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

// doing the same using async-await (async-await is just a syntactical wrapper over promises)
async function readFile() {
    try {
        const data = await fs.readFile("./file.txt", "utf-8")
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

readFile()

// Note: using the promise version of fs module is recommended to use rather than callback version unless there is a requirement of high performance, since the promise version is more readable than the callback one