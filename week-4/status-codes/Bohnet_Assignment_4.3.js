/*
============================================
; Title: Assignment 4.3
; Author: Chris Bohnet
; Date: 10 March 2020
; Modified By:
; Description: HTTP Status Codes
;HTTP status ranges in a nutshell (Hahn, 2016):

1xx: hold on
2xx: here you go
3xx: go away
4xx: you messed up
5xx: I messed up

The most common status codes are:

200: OK
401: Unauthorized
403: Forbidden
404: Not Found
405: Method Not Allowed
500: Internal Server Error
501: Not Implemented
503: Service Unavailable

============================================

*/
var header = require('../../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-4.3'))

//library that allows us to use express
var express = require("express");

//library that allows us to create the server
var http = require("http");

//Calls the express function to start a new Express application
var app = express();

//Create your own get request and return a JSON object
app.get("/not-found", function(request, response) {

    response.status(404);

    response.json({

        error: "Resource not found."

    });

});

app.get("/ok", function(request, response) {

    response.status(200);

    response.json({

        message: "Page loaded correctly."

    });

});

app.get("/not-implemented", function(request, response) {

    response.status(501);

    response.json({

        error: 'Page not implemented.'

    })

});
//create the server and pass in the app object
http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});

