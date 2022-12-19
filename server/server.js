//const http = require("http");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//const server = http.createServer(app);

//app.get("/", (req, res) => res.send("Hello World!"))

app.listen(port, () => console.log("Testet lyssnar på LH:3000"));

app.get("/", function (req, res) {
    res.send("GET request to the homepage")
})
app.post("/", function (req, res) {
    res.send("POST request to the homepage")
})
/*
http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end("Hello from the server-side of life");
}).listen(1337)

console.log("Servern är igång på localhost:1337");
*/