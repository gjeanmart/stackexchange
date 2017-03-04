var A = artifacts.require("./A.sol");
var B = artifacts.require("./B.sol");

module.exports = function(deployer) {
  deployer.deploy(B);
  deployer.deploy(A);
};
