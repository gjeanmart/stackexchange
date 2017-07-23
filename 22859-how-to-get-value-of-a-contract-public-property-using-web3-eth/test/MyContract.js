/*
var MyContract = artifacts.require("./MyContract.sol");

contract('MyContract', function(accounts) {
  it("should put 10000 MetaCoin in the first account", function() {
    return MyContract.deployed().then(function(instance) {
      return instance.owner.call();
    }).then(function(owner) {
        console.log("owner="+owner);
    });
  });
  
  
  
});

*/

//***********************************

//var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var abi = [
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "type": "constructor"
    }
  ];
  
  
var test = web3.eth.contract(abi);

// initiate contract for an address
var testInstance = test.at('0xa07ddaff6d8b7aabf91ac6f82bf89455eb9784f4');

// call constant function
var result = testInstance.owner.call();
console.log("result="+result) // '0x25434534534'