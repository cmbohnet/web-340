/*
============================================
; Title: Assignment 3.4
; Author: Chris Bohnet
; Date: 3 March 2020
; Modified By:
; Description: Putting it all together
============================================

*/

var header = require('../../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-3.4'))

//Requires the Morgan module for logging
var logger = require("morgan");

var express = require('express');

//library that allows us to create the server
var http = require('http');

var path=require('path');

//const ejsLint = require('ejs-lint');

//Calls the express function to start a new Express application
var app = express();

//Tell Express the views are in the views directory
app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));
//get the employee parameter from the request 
app.get("/", function(request, response) {

    response.render("index", {

        message: "home page"

    });

});

app.get("/about", function(request, response) {

    response.render("about", {

        message: "about page"

    });

});

app.get("/contact", function(request, response) {

    response.render("contact", {

        message: "contact page"

    })

});

app.get("/products", function(request, response) {

   response.render("products", {

       message: "products page"

   });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});
