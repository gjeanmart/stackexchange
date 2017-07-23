var Voting = artifacts.require("./Voting.sol");

contract('Voting', function(accounts) {
    
    
    
    it("test1", function() {
        var votingInstance;
        
        return Voting.deployed().then(function(instance) {
            votingInstance = instance;
            return votingInstance.voteForCandidate("greg", {from: accounts[0], value: web3.toWei(5, "ether")});
        
        }).then(function(tx) {
            console.log(tx);
            console.log(tx.logs[0]);
        });
    });
    
    
    

});
