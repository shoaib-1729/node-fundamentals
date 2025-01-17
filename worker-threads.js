// worker module
const { parentPort } = require('node:worker_threads')

// CPU intensive task (slow page ka example)
let j = 0;
for (let i = 0; i < 6000000000; i++) {
    j++;
}

// yeh j ki value pass karo
parentPort.postMessage(j)