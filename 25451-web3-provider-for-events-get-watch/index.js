
// Import libraries
var Web3        = require('web3'),
    contract    = require("truffle-contract"),
    path        = require('path')
    MetaCoin    = require(path.join(__dirname, 'build/contracts/MetaCoin.json'));


// THIS DOES NOT WORK:
const web3Url = `https://ropsten.infura.io/CuTBtVMqx3zc8cAASK3H`;
const web3_rospten = new Web3(new Web3.providers.HttpProvider(web3Url));
console.log(web3_rospten);


// THIS WORKS:
const web3_testrpc = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
console.log(web3_testrpc);

var MetaCoinContract = contract(MetaCoin);
MetaCoinContract.setProvider(web3_testrpc);

MetaCoinContract.deployed().then(function(instance) {

    return instance.getBalance.call('0x13a0674c16f6a5789bff26188c63422a764d9a39', {from: '0x13a0674c16f6a5789bff26188c63422a764d9a39'})
    
}).then(function(result) {
    console.log(result);
    
}, function(error) {
    console.log(error);
}); 
    