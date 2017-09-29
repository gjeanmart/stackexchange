var HOST = '127.0.0.1'; 
var PORT = 10001; 
var Web3 = require('web3'); 

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); 
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"x","type":"string"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]'); 
SimpleStorage = web3.eth.contract(abi); 

contractInstance = SimpleStorage.at('0x50929a253c99d6946d32fa46ce1130acfed81173'); 

contractInstance.set("AB", {from: web3.eth.accounts[0], gas: 4700000}); 

x = contractInstance.get.call(); 



console.log(x);