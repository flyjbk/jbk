const express = require("express");
const server = express();

server.use(express.static(__dirname + "./jbk"));

server.get("/", (req, res) => {
 
  res.sendFile(__dirname + "/docs/index.html");
});

server.get("/culture", (req, res) => {
  res.sendFile(__dirname + "/docs/culture.html");
});

server.get("/newsroom", (req, res) => {
    res.sendFile(__dirname + "/docs/newsroom.html");
  });

  server.get("/service", (req, res) => {
    res.sendFile(__dirname + "/docs/service.html");
  });  

server.listen(8080, (err) => {
  if (err) return console.log(err);
  console.log("The server is listening on port 8080");
});