var Contract = artifacts.require("Weechain.sol");

contract('Contract', function(accounts) {
	console.log(accounts);
	console.log("length: " + accounts.length);
});
