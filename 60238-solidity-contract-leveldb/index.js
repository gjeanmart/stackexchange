"use strict";

(async () => {

	const Web3 = require('web3');
	const solc = require('solc')

	// Connect to the node
	var web3 = new Web3();
	web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

	// Smart contract source
	let source = "pragma solidity ^0.4.20;" +
	"contract ValueStorage {" +
	"   uint value;" +
	"	function setValue(uint _value) public {" +
	"		value = _value;" +
	"	}" +
	"   function getValue() public view returns  (uint) {" +
	"       return value; " +
	"   }" +
	"}";

	// Deploy the contract
	let instance = await deployContract(web3, source);

	///////////////////
	// Send a transaction to set he value to 10
	await setValue(instance, 10);

	// Query the contract to get the value
	let value1 = await getValue(instance);
	console.log("value="+value1);

	///////////////////
	// Send a transaction to set he value to 15
	await setValue(instance, 15);

	// Query the contract to get the value
	let value2 = await getValue(instance);
	console.log("value="+value2);

	///////////////////

    async function deployContract (web3, source) {
        
        return new Promise( (resolve, reject) => {

			let compiledContract = solc.compile(source, 1);
			let abi = compiledContract.contracts[':ValueStorage'].interface;
			let bytecode = compiledContract.contracts[':ValueStorage'].bytecode;

			let gasEstimate = web3.eth.estimateGas({data: bytecode});
			let ValueStorageContract = web3.eth.contract(JSON.parse(abi));
			
			ValueStorageContract.new({from: web3.eth.coinbase, data:bytecode, gas:gasEstimate}, function(err, contract) {
			   if(!err) {
			      if(!contract.address) {
			          console.log("Transaction Hash=" + contract.transactionHash) // The hash of the transaction, which deploys the contract
			      } else {
			          console.log("Contract Address=" + contract.address) // the contract address
			          resolve(contract);
			      }
			   } else {
			   	   console.err(err);
			   	   reject(err);
			   }
			});

        });
    }


    async function setValue (instance, value) {
        
        return new Promise( (resolve, reject) => {

			instance.setValue.sendTransaction(value, {from: web3.eth.coinbase}, function(err, tx) {
			   if(!err) {
			        console.log("Transaction Hash=" + tx) // The hash of the transaction, which set the value
			        resolve();
			   } else {
			   	   console.err(err);
			   	   reject(err);
			   }
			});

        });
    }

    async function getValue (instance) {
        
        return new Promise( (resolve, reject) => {

			instance.getValue.call(function(err, value) {
			   if(!err) {
			        resolve(value);
			   } else {
			   	   console.err(err);
			   	   reject(err);
			   }
			});

        });
    }


})();