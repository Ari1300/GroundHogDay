var express = require("express");
var app = express();
var {AllGroundhogs} = require("./main.js");

app.get("/", (req, resp)=>{
  resp.send("It worked");
});

app.listen(1985)
console.log("Listening on port 1985");
