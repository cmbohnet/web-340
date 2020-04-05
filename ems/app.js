/*
============================================
; Title:  app.js
; Author: Chris Bohnet
; Date:   4 April 2020
; Description: Driver for the Employee Management System
;===========================================
*/

// Require statements
var express = require("express");
var http = require("http");
var path = require("path");
var mongoose = require("mongoose");
var logger = require("morgan");
var Employee = require("./models/employee");

// mLab connection
var mongoDB = "mongodb+srv://web340MongoUser:web340MongoUser@cluster0-3uuui.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

//Create the express application and set the ejs views and logger
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

// model
var employee = new Employee({

    firstName: "Chris",
    lastName: "Bohnet"

});


/*var employee = [
    {name: "Chris"}, 
    {name: "Brian"}, 
    {name: "Georgie"},
    {name:  "Sam"}];
*/
//Routing for landing page
app.get("/", function (request, response) {

    response.render("index", {

        title: "Home page",
        employee: employee
    });

});

//Routing for new employee entry page
app.get("/new", function (request, response) {

    response.render("new", {

        title: "Enter New Employee",
        
    });

});

//Routing for display list of current employees page
app.get("/list", function (request, response) {

    response.render("list", {

        title: "List of Employees",
        employee: employee
    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});

