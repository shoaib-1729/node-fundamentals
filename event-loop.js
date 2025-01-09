// experiment-1: analyzing task in next tick queue

// console.log('console.log 1');
// next tick queue
// process.nextTick(() => console.log(`Next tick 1`));
// console.log('console.log 2');

// inference from exp-1:
// pehle synchronous code execute hoge phir asynchronous code

// ------------------------

// experiment-2: promise queue v/s next tick queue

// // next tick queue
// process.nextTick(() => console.log('Next tick 1'));

// // promise queue
// Promise.resolve().then(() => console.log('Promise 1'));

// inference from exp-2:
// event loop mei next tick queue ko zyada priority milti hai promise queue se

// ------------------------

// experiment-2.1: promise queue v/s next tick queue (a bit updated version of exp-2)

// // process.nextTick queue
// process.nextTick(() => console.log('Next tick 1'));
// process.nextTick(() => {
//     console.log('Next tick 2');
//     // inner next tick queue
//     process.nextTick(() => {
//         console.log('Inner next queue inside next tick');
//     });
// })
// process.nextTick(() => console.log('Next tick 3'));

// // promise
// Promise.resolve().then(() => console.log('Promise 1'));
// Promise.resolve().then(() => {
//     console.log('Promise 2');
//     // next tick queue
//     process.nextTick(() => {
//         console.log('Inner next tick inside promise');
//     });
// });
// Promise.resolve().then(() => console.log('Promise 3'));

// // inference from exp-2.1:
// // same inference as of exp-2

// remember: queues humesha FIFO order mei execute hoge


// ------------------------

// // experiment-3: execution order of nextTick queue, promise queue, and timer queue

// // timer queue (setTimeout ya setInterval mei se kisi ka bhi use kar sakte hai timer queue mei karne ke liye)
// setTimeout(() => {
//     console.log('SetTimeout 1');
// }, 0);
// setTimeout(() => {
//     console.log('SetTimeout 2');
// }, 0);
// setTimeout(() => {
//     console.log('SetTimeout 3');
// }, 0);

// // process.nextTick queue
// process.nextTick(() => console.log('Next tick 1'));
// process.nextTick(() => {
//     console.log('Next tick 2');
//     // inner next tick queue
//     process.nextTick(() => {
//         console.log('Inner next queue inside next tick');
//     });
// })
// process.nextTick(() => console.log('Next tick 3'));

// // promise
// Promise.resolve().then(() => console.log('Promise 1'));
// Promise.resolve().then(() => {
//     console.log('Promise 2');
//     // next tick queue
//     process.nextTick(() => {
//         console.log('Inner next tick inside promise');
//     });
// });
// Promise.resolve().then(() => console.log('Promise 3'));

// // inference from exp-3:
// // microtask queue ko zyada priority di jaati hai timer queue se event loop dwara



////////////////////////////////////////

// // experiment-4: execution order of nextTick queue, promise queue, and timer queue

// // timer queue (setTimeout ya setInterval mei se kisi ka bhi use kar sakte hai timer queue mei karne ke liye)
// setTimeout(() => {
//     console.log('SetTimeout 1');
// }, 0);
// setTimeout(() => {
//     console.log('SetTimeout 2');
//     // next tick queue
//     process.nextTick(() => {
//         console.log('Inner next tick inside setTimeout');
//     });
// }, 0);
// setTimeout(() => {
//     console.log('SetTimeout 3');
// }, 0);

// // process.nextTick queue
// process.nextTick(() => console.log('Next tick 1'));
// process.nextTick(() => {
//     console.log('Next tick 2');
//     // inner next tick queue
//     process.nextTick(() => {
//         console.log('Inner next queue inside next tick');
//     });
// })
// process.nextTick(() => console.log('Next tick 3'));

// // promise
// Promise.resolve().then(() => console.log('Promise 1'));
// Promise.resolve().then(() => {
//     console.log('Promise 2');
//     // next tick queue
//     process.nextTick(() => {
//         console.log('Inner next tick inside promise');
//     });
// });
// Promise.resolve().then(() => console.log('Promise 3'));

// // inference from exp-4:
// // timer queue mei har callback execute karne ke baad control wapas microtask queue mei jaayega aur agar koi callback hoga nextTick queue mei ya promise queue mei toh woh execute hoga....


///////////////////////////

// // experiment-5: execution order of nextTick queue, promise queue, and timer queue

// // timer queue
// setTimeout(() => {
//     console.log('SetTimeout 1');
// }, 1000);
// setTimeout(() => {
//     console.log('SetTimeout 2');
// }, 500);
// setTimeout(() => {
//     console.log('SetTimeout 3');
// }, 0);

// // inference from experiment-5:
// // timer queue mei cheezei FIFO order mei execute hogi, yaani jiska delay kam hai woh pehle execute hoga aur jiska delay zyada hai woh baad mei execute hoga...

///////////////////////////


// // experiment-6: execution order of microtask queue, and I/O queue

// // remember: i/o queue mei lagbhag saare async methods aate hai joh humne built-in modules mei padhe the

// const fs = require("node:fs");

// // i/o queue
// fs.readFile(__filename, () => {
//     console.log('reading file 1');
// })

// // next tick queue
// process.nextTick(() => console.log('next tick 1'));

// // promise queue
// Promise.resolve().then(() => console.log('promise 1'));

// // inference from experiment-6:
// // pehle microtask queue execute hoga phir I/O queue ke callbacks execute hoge

///////////////////////////

// // experiment-7: execution order of I/O queue, and timer queue


// const fs = require("node:fs");

// // timer queue
// setTimeout(() => console.log('setTimeout 1'), 0);

// // i/o queue
// fs.readFile(__filename, () => {
//     console.log('reading file 1');
// })


// // inference from experiment-7:
// jab setTimeout 0 delay ke saath aur I/O async method saath hote hai toh execution order kabhi guaranteed nhi hota, kuch bhi ho sakta hai
// yeh anomaly node ke minimum delay for timer functions se aa sakti hai jismei node 0ms delay ko 1ms delay se override kar deta hai, aur execution CPU kitna busy hai uspar bhi depend karti hai

////////////////////

// // experiment-8: execution order of microtask queue, timer queue and I/O queue

// const fs = require("node:fs");

// // i/o queue
// fs.readFile(__filename, () => {
//     console.log('reading file 1');
// })

// // next tick queue
// process.nextTick(() => console.log('next tick 1'));

// // promise queue
// Promise.resolve().then(() => console.log('promise 1'));

// // timer queue
// setTimeout(() => console.log('seTimeout 1'), 0);

// // execution ko delay kardo taaki jab control event loop pr jaayein tab tak setTimeout queue ho chuka ho timer queue mei
// for (let i = 0; i < 2000000; i++);

// // inference from experiment-7:
// // pehle microtask queue ke callbacks execute hote hai, phir timer queue ke, uske baad I/O queue ke


////////////

// experiment-9: I/O Polling and close queue

const fs = require("node:fs");

// i/o queue
fs.readFile(__filename, () => {
    console.log('reading file 1');
})

// next tick queue
process.nextTick(() => console.log('next tick 1'));

// promise queue
Promise.resolve().then(() => console.log('promise 1'));

// timer queue
setTimeout(() => console.log('setTimeout 1'), 0);

// close queue
// close queue mei queue karne ke liye setImmediate async method ka istemaal kiya jaata hai
setImmediate(() => console.log('setImmediate 1'));

// execution ko delay kardo taaki jab control event loop pr jaayein tab tak setTimeout queue ho chuka ho timer queue mei
for (let i = 0; i < 2000000; i++);

// inference from experiment-9:
// yaha close queue pehle execute hua I/O queue se aisa kyu?
// yeh I/O polling ke karan hua hai, I/O queue mei async callbacks apne operation ke complete hone par hi queue kiye jaate hai, aur iske liye I/O polling ki jaati hai; kyuki I/O polling I/O queue ke baad hoti hai isiliye close queue pehle execute hua I/O queue se, aur jab dusri baad event loop ka iteration hoga tab I/O queue wala code run hoga