var abi = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "x",
          "type": "uint256"
        }
      ],
      "name": "getAandB",
      "outputs": [
        {
          "name": "a",
          "type": "uint256"
        },
        {
          "name": "b",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    }
  ];
  
  
var test = web3.eth.contract(abi);

// initiate contract for an address
var testInstance = test.at('0xa07ddaff6d8b7aabf91ac6f82bf89455eb9784f4');

// call constant function
var result = testInstance.getAandB.call(2);
console.log("a="+result[0]);
console.log("b="+result[1]);