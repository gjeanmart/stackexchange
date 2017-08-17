var MyContract = artifacts.require("./MyContract.sol");

contract('MyContract', function(accounts) {
    
    var c
    
  it("should work", function() {
    return MyContract.deployed().then(function(instance) {
        c = instance;
        return c.makeDatum.estimateGas("test", {from: accounts[0],  'value': 50000});
      
    }).then(function(gas) {
        console.log(gas);
        return c.makeDatum("test", {'from': accounts[0], 'gas':gas,  'value': 50000});
      
    }).then(function(result) {
        console.log(result);
    });

  });

});
