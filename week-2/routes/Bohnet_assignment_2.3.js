/*
============================================
; Title: Assignment 2.3
; Author: Chris Bohnet
; Date: 25 February 2020
; Modified By:
; Description: Routing
============================================

*/

var header = require('../../bohnet-header');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-2.3'))

//Requires the Express module just as you would require other modules
var express = require('express');

//library that allows us to create the server
var http = require('http');

//Calls the express function to start a new Express application
var app = express();

app.get("/", function(request, response) {
   response.end("Welcome to the homepage!");
});

app.get("/about", function(request, response) {
   response.end("Welcome to the about page!");
});

app.get("/contact", function(request, response) {
   response.end("Welcome to the contact page!");
});

app.use(function(request, response) {
   response.statusCode = 404;
   response.end("404!");
});

//Starts the server on port 8080
http.createServer(app).listen(8080, function()
{
   console.log('Routes Application started on port 8080');
})

 