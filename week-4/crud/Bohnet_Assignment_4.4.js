/*
============================================
; Title:  Bohnet_Assignment_4.4.js
; Author: Professor Krasso
; Date:   10 March 2020
; Modified by: Chris Bohnet
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/
//Imports express
var express = require("express");
//Imports http libraries
var http = require("http");
//Creates an express app
var app = express();

app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.");
});

app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request");
});

app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
