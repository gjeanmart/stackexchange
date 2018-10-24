var IPFSStorage = artifacts.require("./IPFSStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(IPFSStorage);
};
