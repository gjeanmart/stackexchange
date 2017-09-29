var basicStorage = artifacts.require("./basicStorage.sol");
var Web3 = require('web3');


var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var basicStorageContract = web3.eth.contract(basicStorage._json.abi);
var basicStorageContractInstance = basicStorageContract.at(basicStorage.networks['1506631081762'].address);
     
var myEvent = basicStorageContractInstance.SetEvent({}, {fromBlock: 0, toBlock: 'latest'});

// watch for changes
console.log("Start watching events"); 
myEvent.watch(function(error, result){
    if (!error) {
        console.log(result);
    } else {
        console.log(error);  
    }
});




// 
console.log("set(10)"); 
basicStorageContractInstance.set(10, {from: '0x13a0674c16f6a5789bff26188c63422a764d9a39'});
sleep(1000);

console.log("set(20)"); 
basicStorageContractInstance.set(20, {from: '0x13a0674c16f6a5789bff26188c63422a764d9a39'});
sleep(1000);

console.log("set(30)");  
basicStorageContractInstance.set(30, {from: '0x13a0674c16f6a5789bff26188c63422a764d9a39'});


function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
