var SignatureRecover = artifacts.require("SignatureRecover");

module.exports = function(deployer) {
    deployer.deploy(SignatureRecover)
};
