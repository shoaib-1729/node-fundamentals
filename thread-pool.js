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

// example-2: analyzing async nature

// crypto module: used to hash passwords
const crypto = require("node:crypto")

// set max calls
const MAX_CALLS = 3;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
        console.log(`Hash: ${i+1}`, Date.now() - start);
    });
}

// note: async behaviour hone ke karan code non-blocking hai, yaani time consuming code 'libuv' ke threads ke dwara execute ho raha hai, isiliye har baar function run karne par same time le rahe hai execution mei...