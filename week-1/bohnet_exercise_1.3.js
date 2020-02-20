/*
============================================
; Title: Assignment 1.3
; Author: Chris Bohnet
; Date: 19 February 2020
; Modified By:
; Description: Class Refresher
============================================

*/

var header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-1.3'))

var url = require("url");

var parsedURL = url.parse("https://www.neworks.nebraska.gov/vosnet/timeout.aspx?lblErrorMessage=You%20have%20exeeded%20the%20timeout%20settings%20for%20VOS");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);

