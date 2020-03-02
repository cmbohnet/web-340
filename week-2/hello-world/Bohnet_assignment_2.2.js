/*
============================================
; Title: Assignment 2.2
; Author: Chris Bohnet
; Date: 25 February 2020
; Modified By:
; Description: Hello World with Express
============================================

*/

var header = require('../../bohnet-header');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-2.2'))

//Requires the Express module just as you would require other modules
var express = require('express');

//library that allows us to create the server
var http = require('http');

//Calls the express function to start a new Express application
var app = express();

app.use(function(request, response) {

   console.log('In comes a request to: ' + request.url);
   response.end('Hello World');

});

//Starts the server on port 8080
http.createServer(app).listen(8080, function()
{
   console.log('Application started on port 8080');
})

 