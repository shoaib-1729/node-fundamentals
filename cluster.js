// Cluster ka use kar rahe hain, jo Node.js ke single-threaded issue ko solve karta hai
// Master: Current file ko master bana deta hai jo workers ko spawn karega
// Worker: Requests ko handle karega

// Cluster module import
const cluster = require('node:cluster');
// HTTP module import
const http = require('node:http');
// os module
const OS = require('node:os');

// cpu cores
console.log(OS.cpus().length);



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
            // CPU intensive task (slow page ka example)
            for (let i = 0; i < 6000000000; i++)
            // Slow page ka response bhejna
                res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(`Slow Page ${j}`);
        }
    });

    // Server ko 8000 port pe listen karne ke liye bol rahe hain
    server.listen(8000, () => {
        console.log('Server is running on port 8000');
    });
}

// things to note:
// kam se kam 2 worker banao, ek banaoge toh woh no-cluster scenerio ke barabar hoga, aani ek hi worker saari incoming requests ko dekh raha hoga
// agar cluster wala scenerio mimic karna hai without writing the above code, 'pm2' npm package ka use kar sakte ho, iska use karke no-cluster.js file ko run karo toh wahi cluster wala scenerio mimic karega