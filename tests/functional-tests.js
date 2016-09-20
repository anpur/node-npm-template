// Check out https://mochajs.org/#asynchronous-code to learn more about async Mocha tests
describe("Group of functional tests", function () {

    it("functional async test", function (done) {

         var yourCallbackFunc = function () {
             // call done function in your callback when your async test is finished
             done(); 
         }
         setTimeout(yourCallbackFunc, 100);
         
    }).timeout(1000);

});