/*
============================================
; Title: Assignment 2.4
; Author: Chris Bohnet
; Date: 25 February 2020
; Modified By:
; Description: EJS Views
============================================

*/

var header = require('../../bohnet-header');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-2.4'))

//Requires the Express module just as you would require other modules
var express = require('express');

//library that allows us to create the server
var http = require('http');

var path=require('path');

//Calls the express function to start a new Express application
var app = express();

//Tell Express the views are in the views directory
app.set("views",path.resolve(__dirname,"views"));

//Tell Express to use the EJS view engine
app.set("view engine","ejs");

app.get("/", function(request, response) {
   response.render("index",{
      firstName:"Chris",
      lastName:"Bohnet",
      address:"CB"
   });
   
});

//Starts the server on port 8080
http.createServer(app).listen(8080, function()
{
   console.log('EJS-Views app started on port 8080');
});

/*<nav class="navbar navbar-expand-sm bg-dark navbar-dark">

<ul class="navbar-nav">

    <li class="nav-item active">

        nav-link" href="#">Home

    </li>

    <li class="nav-item">

    </li>

    <li class="nav-item">

        nav-link" href="#">Contact Us

    </li>

</ul>

</nav>

<div role="main" class="container">

<br/><br/>

<h2>EJS Views Example</h2>

<div class="row">

<div class="col-sm-12">  


        <div class="alert alert-success" role="alert">

            <strong>FirstName: </strong>  <span><%= firstName %></span>
            <strong>LastName: </strong>  <span><%= lastName %></span>
            <strong>Address: </strong>  <span><%= address %></span>

        </div>

    </div>

</div>

</div>

*/

 