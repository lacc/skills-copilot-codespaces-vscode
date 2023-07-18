// Create web server
const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 3000;
const server = http.createServer(function (req, res) {
    const path = url.parse(req.url, true);
    if (path.pathname === "/") {
        fs.readFile("index.html", function (err, data) {
            if (err) {
                res.writeHead(404);
                res.write("File not found!");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
            }
            res.end();
        });
    } else if (path.pathname === "/skills") {
        fs.readFile("skills.html", function (err, data) {
            if (err) {
                res.writeHead(404);
                res.write("File not found!");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
            }
            res.end();
        });
    } else if (path.pathname === "/comments") {
        fs.readFile("comments.html", function (err, data) {
            if (err) {
                res.writeHead(404);
                res.write("File not found!");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
            }
            res.end();
        });
    } else if (path.pathname === "/api/skills") {
        fs.readFile("skills.json", function (err, data) {
            if (err) {
                res.writeHead(404);
                res.write("File not found!");
            } else {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.write(data);
            }
            res.end();
        });
    } else if (path.pathname === "/api/comments") {
        fs.readFile("comments.json", function (err, data) {
            if (err) {
                res.writeHead(404);
                res.write("File not found!");
            } else {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.write(data);
            }
            res.end();
        });
    } else {
        res.writeHead(404);
        res.write("File not found!");
        res.end();
    }
});
server.listen(port, function (err) {
    if (err) {
        console.log("Something went wrong!", err);
    } else