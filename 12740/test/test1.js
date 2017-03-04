var A = artifacts.require("./A.sol");

contract('A', function() {
    
    it("should work", function() {
        return A.deployed().then(function(instance){

            // Send transaction.
            return instance.create();
            
        }).then(function(result){
            // The transaction is sent to the node. It is now pending until a miner mined it in a block
            console.log("transaction:");
            console.log(result.tx);
            console.log("logs:");
            console.log(result.logs);
            
            return A.deployed();
            
        }).then(function(instance){
            // Get the data 
            return instance.getElements.call();
            
        }).then(function(result){
            console.log(result);
        });
    });
});