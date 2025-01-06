// // understanding the behaviour of thread-pool
// // node ke 'libuv' dependencies ke paas threads ki pool jiska istemaal karke woh async tasks ko execute kar dakta hai...

// // example-1: analyzing sync nature

// // crypto module: used to hash passwords
// const crypto = require("node:crypto")

// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Hash: ", Date.now() - start);

// note: sync hone ke karan code blocking nature ka hota hai aur isiliye same function dobaara run karne par lagbhag usse dugna time leta hai

/////////////////////////////////////////

// // example-2: analyzing async nature

// // crypto module: used to hash passwords
// const crypto = require("node:crypto")

// // set max calls
// const MAX_CALLS = 3;

// const start = Date.now();
// for (let i = 0; i < MAX_CALLS; i++) {
//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//         console.log(`Hash: ${i+1}`, Date.now() - start);
//     });
// }

// note: async behaviour hone ke karan code non-blocking hai, yaani time consuming code 'libuv' ke threads ke dwara execute ho raha hai, isiliye har baar function run karne par same time le rahe hai execution mei...

/////////////////////////////////////////

// // example-3: analyzing how thread pool size affects the execution of async tasks

// // crypto module: used to hash passwords
// const crypto = require("node:crypto")

// // set max calls
// const MAX_CALLS = 5;

// const start = Date.now();
// for (let i = 0; i < MAX_CALLS; i++) {
//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//         console.log(`Hash: ${i+1}`, Date.now() - start);
//     });
// }

// // note: by default thread pool size 4 hota hai, isse zyada threads hone par ek thread ko wait karna padta hai kisi thread ke khali hpne tak ka jiske karan time almost double ho jaata hai jaise 'hash 5' ke saath dekhne ko mila

/////////////////////////////////////////////////////

// example-4: increasing thread pool size to improve performance of execution of async tasks

// crypto module: used to hash passwords
// const crypto = require("node:crypto")

// // increasing thread pool size using process environment variable available in nodejs
// process.env.UV_THREADPOOL_SIZE = 8;

// // set max calls
// const MAX_CALLS = 8;

// const start = Date.now();
// for (let i = 0; i < MAX_CALLS; i++) {
//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//         console.log(`Hash: ${i+1}`, Date.now() - start);
//     });
// }

// // note: halaaki hum thread pool size ko increase kar sakte hai performance improve karne ke liye lekin ek hadd takk, uske baad saare tasks almost same time lege, yeh depend karega aapke cpu cors par, cpu cors se zyada threads hone par har threads lagbhag same time legi

// // remember:

// // 1. Thread Pool Size and CPU Core Allocation: Thread pool size ko 8 set karne ka matlab yeh nahi hai ki har thread ko ek specific CPU core assign hoga. Thread scheduling OS-level decision hota hai, jo exact time mein vary kar sakta hai.
// // 2. Execution Timing Differences: CPU-bound operations aur OS-level scheduler ke kaam karne ke tareeke ki wajah se thread timings mein difference ho sakta hai.
// // example-4: increasing thread pool size to improve performance of execution of async tasks

////////////////////////////////////////////////

// example 5: har async method libuv ke thread pool dwara nahi execute hoga, kuch methods OS ke kernel ke dwara handle kiye jaate hai jaise network requests like http and https joh async in nature hote hai..
const https = require("node:https")

// set max calls
const MAX_CALLS = 16;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
    https
        .request("https://www.google.com", (res) => {
            res.on("data", () => {});
            res.on("end", () => {
                console.log(`Request: ${i+1}`, Date.now() - start);
            });
        })
        .end();
}

// note: har async operations libuv ke dwara nhi handle kiye jaate, kuch OS ke dwara bhi hote hai