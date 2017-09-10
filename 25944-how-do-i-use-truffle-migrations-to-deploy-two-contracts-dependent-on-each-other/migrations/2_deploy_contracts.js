var MonolithExchange = artifacts.require("./MonolithExchange.sol");
var MonolithToken = artifacts.require("./MonolithToken.sol");

var MonolithExchangeAddress;
var MonolithTokenAddress;


module.exports = function(deployer) {
  deployer.deploy(MonolithToken)
  .then(() => {
        MonolithTokenAddress = MonolithToken.address;
        console.log("MonolithToken.address="+MonolithTokenAddress);
        return deployer.deploy(MonolithExchange, MonolithTokenAddress);
  })
  .then(() => {
        MonolithExchangeAddress = MonolithExchange.address;
        console.log("MonolithExchange.address="+MonolithExchangeAddress);
        return MonolithToken.deployed()
            .then((instance) => instance.setExchangeContractAddress(MonolithExchangeAddress));
  });
};
