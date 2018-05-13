var Weechain = artifacts.require("./Weechain.sol");

module.exports = function(deployer) {
    deployer.deploy(Weechain)
};
