var CrowdFunding = artifacts.require("./CrowdFunding.sol");

contract('CrowdFunding', function(accounts) {

    var account_one = accounts[0];
    var account_two = accounts[1];
    var campaign;
    var id;

    it("should create a new campaign", function() {
            return CrowdFunding.deployed().then(function(instance) {
                campaign = instance;
                return campaign.newCampaign(account_two, web3.toWei(2, "ether"));
            
            }).then(function (transaction) {
                console.log(transaction);
                id = 0; //campaignID;
                return campaign.contribute(id, {from: account_one, value: web3.toWei(1, "ether")});
            
            }).then(function(transaction) {
                console.log(transaction);
                console.log(web3.eth.getBalance(campaign.address));
                
                var balance =   web3.fromWei(web3.eth.getBalance(campaign.address), "ether");
                console.log(balance.toNumber());
                assert.equal(balance.toNumber(), 1, "Balance isn't 1 after one contribution of 1");
              
                return campaign.getDetails.call(id);
            }).then(function(details) {
                console.log(details);

                return campaign.checkGoalReached.call(id);
            }).then(function(reached) {
                console.log(reached);
                assert.equal(reached, false, "Campaign with goal 2 is reached with balance 1");
                
                return campaign.getDetails.call(id);
            }).then(function(details) {
                console.log(details);

            });
    });
});
