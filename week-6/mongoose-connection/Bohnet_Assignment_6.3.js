/*
============================================
; Title: Bohnet_Assignment_6.3
; Author: Chris Bohnet
; Date: 24 March 2020
; Modified By:
; Description: Demonstrating Mongoose
;
============================================
*/
var header = require('../../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-6.3'))

//library that allows us to use express
var express = require("express");
//library that allows us to create the server
var http = require("http");
//library that allows us to use logger
var logger = require("morgan");
//Mongoose wiring
var mongoose = require("mongoose");

//Mongoose database connection
//var mongoDB = "mongodb+srv://cluster0-3uuui.mongodb.net/test"  --username web340MongoUser --password web340MongoUser";

var mongoDB = "mongodb+srv://web340MongoUser:web340MongoUser@cluster0-3uuui.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

// application
var app = express();
app.use(logger("short"));

// create server
http.createServer(app).listen(8080, function() {
  console.log("Application connected to port 8080!");
});