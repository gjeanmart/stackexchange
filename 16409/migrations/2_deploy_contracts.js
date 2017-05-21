var CrowdFunding = artifacts.require("./CrowdFunding.sol");

module.exports = function(deployer) {
  deployer.deploy(CrowdFunding);
};
