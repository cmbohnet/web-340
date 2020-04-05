/*
============================================
; Title: Bohnet_Assignment_7.2
; Author: Chris Bohnet
; Date: 24 March 2020
; Modified By:
; Description: Demonstrating TDD.  This is the test script.
;
============================================
*/
var header = require('../../../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-7.2'))

//requires the function you're going to test
var getFruits = require("assert");

//Requires Chai, then uses the expect property to make assertions in your tests
var chai = require("chai");
var expect = chai.expect;

//Describes specifications in the same topic.  At the Mocha level.
describe("String#split", function() {
//A specification with a title and code to run.  At the Mocha level.
    it("should return an array of fruits", function() {
        //Does the actual assertions. At the Chai level.
       expect(getFruits(Array.isArray('Apple,Orange,Mango'.split(','))));

    });

});


