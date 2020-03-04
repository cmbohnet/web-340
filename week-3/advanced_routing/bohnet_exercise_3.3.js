/*
============================================
; Title: Assignment 3.3
; Author: Chris Bohnet
; Date: 3 March 2020
; Modified By:
; Description: Advanced Routing
============================================

*/

var header = require('../../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-3.3'))

//Requires the Morgan module for logging
var logger = require("morgan");

var express = require('express');

//library that allows us to create the server
var http = require('http');

var path=require('path');

//Calls the express function to start a new Express application
var app = express();

//Tell Express the views are in the views directory
app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));
//get the employee parameter from the request 
app.get("/:employeeId", function(request, response) {

    var employeeId = parseInt(request.params.employeeId, 10);

     response.render("index", {

        employeeId: employeeId

    })

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});
