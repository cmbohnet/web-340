/*
============================================
; Title: Assignment 1.5
; Author: Chris Bohnet
; Date: 19 February 2020
; Modified By:
; Description: Node.js server example
============================================

*/

var header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-1.5'))

//Variable declaration:

var http = require("http");

function processRequest(req, res) {

var body = "Hi there!";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);

