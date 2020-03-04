/*
============================================
; Title: Assignment 3.2
; Author: Chris Bohnet
; Date: 3 March 2020
; Modified By:
; Description: Logging
============================================

*/

var header = require('../../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-3.2'))

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

app.get("/", function (request, response) {

    response.render("index", {

        message: "Using Morgan logging.  Interesting fact that its named after the Dexter series."

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});
/*
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">

    <ul class="navbar-nav">

        <li class="nav-item active">

            nav-link" href="#">Home

        li>

        <li class="nav-item">

            nav-link" href="#">About

        li>

        <li class="nav-item">

            nav-link" href="#">Contact Us

        li>

    ul>

nav>

<div role="main" class="container">

    <br/><br/>

    <h2><%= message %></h2>

</div>

*/