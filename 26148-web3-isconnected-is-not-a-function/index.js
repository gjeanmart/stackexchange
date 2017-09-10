
var Web3 = require('web3');
//var Net = require('web3-net');


var provider = new Web3.providers.HttpProvider('http://localhost:8545');
var web3 = new Web3(provider);


console.log("isListening=");
web3.eth.net.isListening().then(console.log);