/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   19 March 2020
; Modified by: Chris Bohnet
; Description: Layouts are an important part of building flexible and highly scalable User Interfaces. Over the next five weeks 
; we are going to be building a simple Node.js application for employee records. Milestone 1 is to build the websites layouts and navigation.
; 
; There are many ways to build layouts in Express with EJS. But, the main components are:
; 
; Header
; Navigation
; Footer
; Scripts
; 
; The header.ejs file will contain the head element and stylesheet references. Navbar.ejs will contain the website's navigation, 
; footer.ejs will contain the applications main footer section, and scripts.ejs will contain the websites JavaScript references.
; 
; Structuring your application this way provides several advantages:
; 
; Stylesheet references are updatable from a centralized location
; Navigation is updatable from a centralized location
; JavaScript references are updatable from a centralized location
; Decoupling of HTML content
;  
;===========================================
*/

var header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'app.js'))

//library that allows us to use express
var express = require("express");
//library that allows us to create the server
var http = require("http");
//library that allows us to use morgan logging
var logger = require("morgan");

var path = require("path");

//Calls the express function to start a new Express application
app = express();

//Tell Express the views are in the views directory
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

//Create an array of employees
var emp = ["Chris", "Brian", "Georgie", "Sam"];


app.get("/", function(request, response) {
  response.render("index", {
    title: "Home page",
    employee: [
      {name: "Chris"}, 
      {name: "Brian"}, 
      {name: "Georgie"},
      {name:  "Sam"}]
    //employee: {name: Chris}, {name:Sam}
    /*myObj = {
      "name":"John",
      "age":30,
      "cars": [
        {"name":"Ford", "models":["Fiesta", "Focus", "Mustang"]},
        {"name":"BMW", "models":["320", "X3", "X5"]},
        {"name":"Fiat", "models":["500", "Panda"] }
      ]
    }
    */
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});