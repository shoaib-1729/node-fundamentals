// experiment-1: analyzing task in next tick queue

console.log('console.log 1');
// next tick queue
process.nextTick(() => console.log(`Next tick 1`));
console.log('console.log 2');

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

// experiment-3: promise queue v/s next tick queue (a bit updated version of exp-2)

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
// // same inference as of exp-2