const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  log(req.url);
  if (req.url == "/") {
    res.end("Welcome to our home page");
  }
  if (req.url == "/about") {
    res.end("Welcome to about page");
  }
  res.end(`
    <h1>Oops!<h1>
    <p>The page you are looking is not found.Please go to <a href="/">Home</a></p>
  `);
});

server.listen(5001);
