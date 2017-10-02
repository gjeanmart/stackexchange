var voting = artifacts.require("./Voting.sol");

contract('voting', function(accounts) {
    it("test", function() {
        
        var votingInstance;
    
        voting.deployed().then(function (instance) {
            votingInstance = instance;

            votingInstance.voteForCandidate("greg", {from: accounts[0]})
                .then(function (tx) {
                    console.log(tx);
                    return votingInstance.getAllVotes();
                    
                }).then(function(votes){
                    console.log(votes);
                    
                }).catch(function (error) {
                    console.log(error);
                })
        })
    });
});
