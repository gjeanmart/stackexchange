const Web3 = require('web3');
const RPC_ENDPOINT = "http://localhost:8545" //https://ropsten.infura.io/CuTBtVMqx3zc8cAASK3H 

// Connection to a Ethereum node
var web3 = new Web3(new Web3.providers.HttpProvider(RPC_ENDPOINT));

// Set default account
web3.eth.defaultAccount = web3.eth.accounts[0]

// ABI describes a smart contract interface developped in Solidity
var abi = [
    {
      "constant": true,
      "inputs": [],
      "name": "value",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "val",
          "type": "uint256"
        }
      ],
      "name": "setValue",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "getValue",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

// Address where the smart contract is deployed
var address = "0x3450226a2fccb0d3668e7c3a730c43ef50ec8a06";

// Load the contract schema from the abi
var SimpleStorageContract = web3.eth.contract(abi);

// Instanciate by address
console.log("address="+address);
var simpleStorageContractInstance = SimpleStorageContract.at(address);

// Call one of the ABI function
var value = simpleStorageContractInstance.getValue.call();
console.log("value="+value);