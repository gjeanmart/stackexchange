var Basic = artifacts.require("./Basic.sol");

contract('Basic', function(accounts) {
    
    var basic;
    
    it("Should set value to 40", function() {
        
        return Basic.deployed().then(function(instance) { // Get deployed contract
            basic = instance;

            return basic.getValue.call(); // call getValue function

        }).then(function(result) {
            console.log("#######################");
            console.log("result (hexa)=" + result); // in hexa
            console.log("result (ascii)=" + web3.toAscii(result)); // in ascii
            
            return basic.setValue(web3.fromAscii("40"), {from: accounts[0]}); // send transaction setValue function
      
        }).then(function(receipt) {
            console.log("#######################");
            console.log("transaction receipt");
            console.log(receipt);
            
            
            return basic.getValue.call(); // call getValue function
          
        }).then(function(result) {
            console.log("#######################");
            console.log("result (hexa)=" + result); // in hexa
            console.log("result (ascii)=" + web3.toAscii(result)); // in ascii
            assert.equal(web3.toAscii(result), "40");
        });
    });
    

});

