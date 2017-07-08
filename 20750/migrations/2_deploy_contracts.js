var SilverCoin = artifacts.require("./SilverCoin.sol");
var Banker = artifacts.require("./Banker.sol");

module.exports = function(deployer) {
  deployer.deploy(SilverCoin);
  
  
  
  deployer.deploy(Banker);
  
  
    deployer.deploy(SilverCoin).then(function() {
        console.log("# SilverCoin deployed! (address="+SilverCoin.address+")");
 
        return deployer.deploy(Banker, SilverCoin.address);
        
    }).then(function() {
        console.log("# Banker deployed! (address="+Banker.address+")");
    })
  
  
};

