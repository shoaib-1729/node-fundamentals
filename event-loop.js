// experiment-1: analyzing task in next tick queue

// console.log('console.log 1');
// // next tick queue
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

// experiment-5: execution order of nextTick queue, promise queue, and timer queue

// timer queue
setTimeout(() => {
    console.log('SetTimeout 1');
}, 1000);
setTimeout(() => {
    console.log('SetTimeout 2');
}, 500);
setTimeout(() => {
    console.log('SetTimeout 3');
}, 0);

// inference from experiment-5:
// timer queue mei cheezei FIFO order mei execute hogi, yaani jiska delay kam hai woh pehle execute hoga aur jiska delay zyada hai woh baad mei execute hoga...