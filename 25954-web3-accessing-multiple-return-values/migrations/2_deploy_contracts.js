var test = artifacts.require("./test.sol");

module.exports = function(deployer) {
  deployer.deploy(test);
};
