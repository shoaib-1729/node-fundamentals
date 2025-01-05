// // http module - creating server using node with follows the http format which inturn can be done by using http module

// // import http module
// const http = require("node:http")

// // create a server using http
// const server = http.createServer((req, res) => {
//     // console.log(req);
//     // console.log(res);
//     // // setting response headers, it is recoomended to provide the content type that is sent as the response
//     // res.writeHead(200, "text/plain")
//     //     // sending response to the requests sent by the client
//     // res.end("Hello World")
// }

// // listen to the requests being sent on our server
// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// })


////////////////////////////////////////////////////////////////////

// sending json response to the client from the server

// import http module
// const http = require("node:http")

// // create a server using http
// const server = http.createServer((req, res) => {
//     // sending json response
//     // specify the json response type
//     res.writeHead(200, { "Content-Type": "application/json" })
//         // sending json response
//     const superhero = {
//             firstName: "Bruce",
//             lastName: "Wayne",
//         }
//         // this will not work
//         // res.end(superhero)
//         // converting js object to json format using built-in JSON.stringify() method suppoted by V8 engine
//     res.end(JSON.stringify(superhero))

// })

// // listen to the requests being sent on our server
// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// })


////////////////////////////////////////////////////////////////////

// // sending html response to the client from the server

// // import http module
// const http = require("node:http")

// // import fs module (for reading index file)
// const fs = require("node:fs")

// // create a server using http
// const server = http.createServer((req, res) => {

//     res.writeHead(200, { "Content-Type": "text/html" })

//     // send response
//     // res.end("<h1>Hello World</h1>")

//     // but most of times we would send a html file as a response
//     // read html file using fs module
//     // const file = fs.readFileSync("./index.html", "utf-8");

//     // problem: readFileSync will read the file all at once, agar file badi hogi toh buffer full ho jaayega
//     // solution: streams use karo taaki data chunks mei jaaye, aur phir uss data ko directly response stream pr pipe kardo, alag se response bhejne ki zarurat nhi ha iss case mei...
//     fs.createReadStream("./index.html", "utf-8").pipe(res)


// })

// // listen to the requests being sent on our server
// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// })


// ////////////////////////////////////////////////////////////////////

// // dynamic html responses using string replacement

// // import http module
// const http = require("node:http")

// // import fs module (for reading index file)
// const fs = require("node:fs")

// // create a server using http
// const server = http.createServer((req, res) => {
//     const name = "Shoaib";

//     res.writeHead(200, { "Content-Type": "text/html" })

//     // read html file using fs module
//     let html = fs.readFileSync("./index.html", "utf-8");

//     // update html with the dynamic data
//     html = html.replace("{{name}}", name)

//     // send the response
//     res.end(html)

// })

// // listen to the requests being sent on our server
// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// })


////////////////////////////////////////////////////////////////////

// routing in html based on url using http

// import http module
const http = require("node:http")


// create a server using http
const server = http.createServer((req, res) => {
    // req.url gives you the query string
    // console.log(req.url);

    // sending the response based upon the request 
    if (req.url === "/") {
        // setting response header
        res.writeHead(200, { "Content-Type": "text/plain" });
        // sending response
        res.end("Home Page")

    } else if (req.url === "/about") {
        // setting response header
        res.writeHead(200, { "Content-Type": "text/plain" });
        // sending response
        res.end("About Page")

    } else if (req.url === "/api") {
        // setting response header
        res.writeHead(200, { "Content-Type": "application/json" });

        // sending response
        res.end(
            JSON.stringify({
                firstName: "Bruce",
                lastName: "Wayne",
            })
        )

    } else {
        // if none of the url are matched, respond with error
        res.writeHead(404)
        res.end("<h1>Page Not Found...!</h1>")
    }

});

// listen to the requests being sent on our server
server.listen(3000, () => {
    console.log("Server is running on port 3000");
})