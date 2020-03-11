/*
============================================
; Title: Assignment 4.2
; Author: Chris Bohnet
; Date: 10 March 2020
; Modified By:
; Description: JSON APIs
============================================

*/
var header = require('../../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-4.2'))

//library that allows us to use express
var express = require("express");

//library that allows us to create the server
var http = require("http");

//Calls the express function to start a new Express application
var app = express();

//Create your own get request and return a JSON object
app.get("/customer/:id", function (request, response) {

    var id = parseInt(request.params.id, 10);

    response.json({

        firstName: "Brian",

        lastName: "B",

        employeeId: id

    });

});

//create the server and pass in the app object
http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});

