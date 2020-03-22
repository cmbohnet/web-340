/*
============================================
; Title:  Bohnet_Assignment_5.3.js
; Author: Professor Krasso
; Date:   19 March 2020
; Modified by: Chris Bohnet
; Description: Demonstrates PUG templates. - Layouts are an important feature of any templating language. They allow you to include, 
; in one form or another, other HTML (Hahn, 2016). A very common case is to define a layout file for your pages. That way, everything can 
; have a consistent header and footer while allowing the content to change per page (Hahn, 2016). 
;
; In a sense, the Pug templating engine is a reimagining of HTML that lets you dynamically render HTML with a whole new language. It attempts 
; to remove verbosity and typing (Hahn, 2016).
;
; Pug is installed through the npm manager and added to Node through a require statement.
;
; npm install pug
; var pug = require(“pug”);
;===========================================
*/

var header = require('../../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-5.3'))

//library that allows us to use express
var express = require("express");
//library that allows us to create the server
var http = require("http");
//library that allows us to use pug
var pug = require("pug");

var path = require("path");

//Calls the express function to start a new Express application
app = express();

//Tell Express the views are in the views directory
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(request, response) {
  response.render("index", {
    message: "Welcome to my homepage utilizing Pug templates!"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});