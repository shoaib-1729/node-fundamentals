// Cluster ka use kar rahe hain, jo Node.js ke single-threaded issue ko solve karta hai
// Master: Current file ko master bana deta hai jo workers ko spawn karega
// Worker: Requests ko handle karega

// Cluster module import
const cluster = require('node:cluster');
// HTTP module import
const http = require('node:http');
// worker module
const { Worker } = require('node:worker_threads')

// Agar current process master hai
if (cluster.isMaster) {
    console.log(`Master process ${process.pid} running...`);
    // 2 workers spawn kar rahe hain
    cluster.fork();
    cluster.fork();

} else {
    console.log(`Worker ${process.pid} running...`);

    // HTTP requests handle karne ke liye server bana rahe hain
    const server = http.createServer((req, res) => {
        // Routes define kar rahe hain
        if (req.url === "/") {
            // Home page ka response bhejna
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Home Page");
        } else if (req.url === "/slow-page") {
            // create worker object using Worker constructor
            const worker = new Worker("./worker-threads.js");
            // j ki value yaha receive hogi message event par
            worker.on('message', (j) => {
                // Slow page ka response bhejna
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end(`Slow Page ${j}`);
            })
        }
    });

    // Server ko 8000 port pe listen karne ke liye bol rahe hain
    server.listen(8000, () => {
        console.log('Server is running on port 8000');
    });
}