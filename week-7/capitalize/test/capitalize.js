//requires the function you're going to test
var capitalize = require("../capitalize");

//Requires Chai, then uses the expect property to make assertions in your tests
var chai = require("chai");
var expect = chai.expect;

//Describes specifications in the same topic.  At the Mocha level.
describe("capitalize", function() {
//A specification with a title and code to run.  At the Mocha level.
it("capitalizes single words", function () {
//Does the actual assertions. At the Chai level.
  expect (capitalize("express")).to.equal("Express");
  expect(capitalize("cats")).to.equal("Cats");
});
});