// http module import kar rahe hain
const http = require('node:http');

// HTTP server create kar rahe hain
const server = http.createServer((req, res) => {
    // Route check kar rahe hain
    if (req.url === "/") {
        // Home page ka response bhejna
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home Page");
    } else if (req.url === "/slow-page") {
        // CPU intensive task (slow page)
        for (let i = 0; i < 6000000000; i++);
        // Slow page ka response bhejna
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Slow Page");
    }
})

// Server ko port 8000 pe listen karne ke liye bol rahe hain
server.listen(8000, () => {
    console.log('Server is running on port 8000');
})

// Issue:
// Jab /slow-page ko pehle load karte hain, to CPU intensive task se thread block ho jata hai
// Jiski wajah se home page ka response /slow-page ke complete hone ke baad hi aata hai
// Yeh Node.js ke single-threaded nature ki wajah se ho raha hai
// Cluster module se yeh problem solve hota hai, kyunki workers create karke load distribute karte hain