var A = artifacts.require("./A.sol");

contract('A', function(accounts) {
    it("test", function() {
        
        var aInstance;
    
        A.deployed().then(function (instance) {
            aInstance = instance;

            aInstance.createB(5, {from: accounts[0]})
                .then(function (tx) {
                    console.log(tx.logs[0].args);
                    
 
                }).catch(function (error) {
                    console.log(error);
                })
        })
    });
});


// Watch
var filter = web3.eth.filter({ romBlock: 0, toBlock: "latest" });
filter.watch(function (error, result) {
  console.log(JSON.stringify(result.data));
});