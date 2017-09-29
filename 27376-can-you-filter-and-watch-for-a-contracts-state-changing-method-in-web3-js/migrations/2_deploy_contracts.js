var basicStorage = artifacts.require("./basicStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(basicStorage);
};
