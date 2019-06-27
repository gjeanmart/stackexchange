const DocRegistry = artifacts.require("DocRegistry");

module.exports = function(deployer) {
  deployer.deploy(DocRegistry);
};
