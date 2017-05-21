pragma solidity ^0.4.8;

contract CrowdFunding {
    // Defines a new type with two fields.
    struct Funder {
        address addr;
        uint256 amount;
    }

    struct Campaign {
        address beneficiary;
        uint256 fundingGoal;
        uint numFunders;
        uint256 amount;
        mapping (uint => Funder) funders;
    }

    uint numCampaigns;
    mapping (uint => Campaign) campaigns;

    function CrowdFunding() {
        numCampaigns = 0;
    }
    
    function newCampaign(address beneficiary, uint goal) returns (uint campaignID) {
        campaignID = numCampaigns++; // campaignID is return variable
        // Creates new struct and saves in storage. We leave out the mapping type.
        
        Campaign memory c;
        c.beneficiary = beneficiary;
        c.fundingGoal = goal;
        c.numFunders = 0;
        c.amount = 0;
        
        campaigns[campaignID] = c;
    }

    function contribute(uint campaignID) payable {
        Campaign c = campaigns[campaignID];
        // Creates a new temporary memory struct, initialised with the given values
        // and copies it over to storage.
        // Note that you can also use Funder(msg.sender, msg.value) to initialise.
        c.funders[c.numFunders++] = Funder(msg.sender, msg.value);
        c.amount += msg.value;
    }
    
    function getDetails(uint campaignID) constant returns (uint256, uint256) {
        Campaign c = campaigns[campaignID];
        return (c.fundingGoal, c.amount);
    }

    function checkGoalReached(uint campaignID) returns (bool reached) {
        Campaign c = campaigns[campaignID];
        if (c.amount < c.fundingGoal) {
            return false;
        } 
        uint amount = c.amount;
        c.amount = 0;
        c.beneficiary.transfer(amount);
        return true;
    }
}