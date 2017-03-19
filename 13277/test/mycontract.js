var MyContract = artifacts.require("./MyContract.sol");

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

contract('MyContract', function(accounts) {
    it("TEST 01", function() {
        return MyContract.deployed().then(function(instance) {
            return instance.callOraclize({from: accounts[0]});
        }).then(function(transaction) {
            return sleep(10000);
        }).then(function() {
            return MyContract.deployed();
        }).then(function(instance) {
            return instance.getTitle.call();
        }).then(function(result) {
            console.log("title="+result);
        });
    });
    
    it("TEST 02", function() {
        return MyContract.deployed().then(function(instance) {
            return instance.callOraclize({from: accounts[0]});
        }).then(function(transaction) {
            return sleep(10000);
        }).then(function() {
            return MyContract.deployed();
        }).then(function(instance) {
            return instance.getTitle.call();
        }).then(function(result) {
            console.log("title="+result);
        });
    });
});
