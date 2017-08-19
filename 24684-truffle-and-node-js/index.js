
// Import libraries
var Web3        = require('web3'),
    contract    = require("truffle-contract"),
    path        = require('path')
    MetaCoin    = require(path.join(__dirname, 'build/contracts/MetaCoin.json'));

    
var provider    = new Web3.providers.HttpProvider("http://localhost:8545"),    
    filePath    = path.join(__dirname, 'build/contracts/MetaCoin.json');
 

var MetaCoinContract = contract(MetaCoin);
MetaCoinContract.setProvider(provider);

MetaCoinContract.deployed().then(function(instance) {

    return instance.getBalance.call('0x13a0674c16f6a5789bff26188c63422a764d9a39', {from: '0x13a0674c16f6a5789bff26188c63422a764d9a39'})
    
}).then(function(result) {
    console.log(result);
    
}, function(error) {
    console.log(error);
}); 
