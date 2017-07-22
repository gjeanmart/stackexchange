var PaymentGateway = artifacts.require("./PaymentGateway.sol");

module.exports = function(deployer) {
  deployer.deploy(PaymentGateway);
};
