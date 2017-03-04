var A = artifacts.require("./A.sol");

contract('A', function() {
    
    it("should work", function() {
        return A.deployed().then(function(instance){
            return instance.create();
        }).then(function(transaction){
            console.log("transaction:");
            console.log(transaction);
            return A.deployed();
        }).then(function(instance)
            return instance.watch(function(error, result) {
                if (error == null) {
                    console.log(result.args);
                }
            }
        });
    });
    
});