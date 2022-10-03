"use strict";
const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
app.use(cors({
    origin: "http://localhost:1234",
}));
app.get("/", (req, res) => {
    switch (req.method) {
        case "GET":
            res.send(`
        <html>
          <head>
            <title>My Page</title>
            </head>
            <body>
              
              <h1>My Page</h1>
              <p>My Page Body</p>
              <button id="btn" action="/message" method="POST">Send Message</button>
           
              <div id="fetch-result"></div>
              <script src="index.ts"></script>
              </body>
              </html>
              `);
            break;
        case "POST":
            res.send("troias");
            break;
        default:
            res.send("Hello World!");
            break;
    }
}, (err) => {
    console.log(err);
});
app.post("/", (req, res) => {
    res.send(JSON.stringify({ message: "troias" }));
}, (err) => {
    console.log(err);
});
app.get("/message", (req, res) => {
    res.send(JSON.stringify({ message: "troias" }));
}, (err) => {
    console.log(err);
});
const server = http.createServer(app);
server.listen(3001, () => {
    console.log("server is running");
}, (err) => {
    console.log(err);
});
