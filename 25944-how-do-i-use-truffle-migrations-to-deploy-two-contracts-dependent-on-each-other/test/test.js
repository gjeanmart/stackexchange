var MonolithExchange = artifacts.require("./MonolithExchange.sol");
var MonolithToken = artifacts.require("./MonolithToken.sol");

contract('MonolithExchange', function(accounts) {
    
    var MonolithExchangeInstance;
    var MonolithTokenInstance;
    
    it("Should ....", function() {
        
        return MonolithExchange.deployed().then(function(instance) { // Get deployed contract
            MonolithExchangeInstance = instance;

            return MonolithExchangeInstance.administrator.call(); // call getValue function

        }).then(function(result) {
            console.log("# MonolithExchangeInstance ######################");
            console.log(result);
            
            return MonolithToken.deployed() ;

        }).then(function(instance) {
            MonolithTokenInstance = instance;
            
            return MonolithTokenInstance.administrator.call(); // call getValue function

        }).then(function(result) {
            console.log("# MonolithTokenInstance ######################");
            console.log(result);
        });
    });
    

});

