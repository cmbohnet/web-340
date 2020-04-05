/*
============================================
; Title: Bohnet_Assignment_7.3
; Author: Chris Bohnet
; Date: 3 April 2020
; Modified By:
; Description: Demonstrating Mocha and Chai.  This is the test script.
; Chai is an assertion library. There are a number of assertion libraries 
; (including one built into Node). Whereas, Mocha lays out the tests, Chai 
; (almost literally) says, “I expect the helloWorld function to 
; return ‘hello, world.’  The distinction between Mocha and Chai is
; important (Hahn, 2016). Mocha is a test runner, so there’s no actual 
; executable that runs. Chai is used to actually test the code.
; 
============================================
*/
var header = require('../../../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-7.3'))

//requires the function you're going to test
var fruits = require("../Bohnet-fruits");

//Requires Chai, then uses the expect property to make assertions in your tests
var chai = require("chai");
var assert = chai.assert;

//Describes specifications in the same topic.  At the Mocha level.
describe("fruits", function() {
//A specification with a title and code to run.  At the Mocha level.
    it("should return an array of fruits", function() {
        //Does the actual assertions. At the Chai level.
        var f = fruits('Apple,Orange,Mango');

        assert(Array.isArray(f));
    });

});



