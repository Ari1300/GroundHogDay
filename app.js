var express = require("express");
var app = express();
var {AllGroundhogs} = require("./main.js");
var mysql = require("mysql");

app.get("/", (req, resp)=>{
  resp.send("It worked");
});

app.get("/submit/:moreWinter/:username", (req,resp)=>{
  var moreWinter = req.params.moreWinter;
  var username = req.params.username;
  resp.send(["Success"]);
})

function runSQLQuery(query, callback){
  var connection = mysql.createConnection({
    host:"localhost",
    user:"Web",
    password: "password",
    database: "GroundhogDay"
  })
  connection.connect((error)=>{
    if(error) throw error;
    connection.query(query, (error, result)=>{
      if(error) throw error;
      callback(result);
    });
  });
}

app.listen(1985)
console.log("Listening on port 1985");
