// var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');

console.log("starting sandbox server!!");


app.get("/", (req, res) => {
  console.log("Hello world received a request.");

  const target = process.env.MESSAGE || "World";
  res.send(`Hello`);
});


var port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('Listening on port', port);
});
