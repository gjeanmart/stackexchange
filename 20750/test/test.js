var Banker = artifacts.require("./Banker.sol");

contract('Banker', function(accounts) {

    var account_one = accounts[0];
    var account_two = accounts[1];

    it("should return 0", function() {
            return Banker.deployed().then(function(instance) {
                return instance.abc_1.call();
            
            }).then(function (result) {
                console.log(result.toNumber());

            });
    });
});
