/*
============================================
; Title:  Bohnet_Assignment_5.2.js
; Author: Professor Krasso
; Date:   19 March 2020
; Modified by: Chris Bohnet
; Description: Demonstrates EJS 'if-else-render' operations with names.
;===========================================
*/

var header = require('../../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-5.2'))

//library that allows us to use express
var express = require("express");
//library that allows us to create the server
var http = require("http");
var path = require("path");

//Calls the express function to start a new Express application
app = express();

//Tell Express the views are in the views directory
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//Create an array of names
var n = ["Chris", "Brian", "Georgie", "Sam"];

app.get("/", function(request, response) {
  response.render("index", {
    names: n
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});