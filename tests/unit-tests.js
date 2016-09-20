var assert = require("chai").assert;
var nodeNpmExample = require('../node-npm-template.js'); 

// Check out https://mochajs.org/ to learn more about tests
describe("Group of unit tests", function () {

    it("unit test: examles of asserts", function() {
        // Check out http://chaijs.com/api/assert/ to learn more about Chai asserts
        
        assert.equal(true, 1 === 1, "Simple check");        
        
        assert.deepEqual(["a", "b", "c"], "abc".split(""), "Assert array");

        assert.deepEqual({ result: true }, { result: 1 === 1 }, "Assert dictionary");
    });

    it("unit test: NodeNpmExample.getAnswer()", function() {
        var instance = new nodeNpmExample();

        assert.equal(42, instance.getAnswer(), "Checking that answer is 42");
    });

});