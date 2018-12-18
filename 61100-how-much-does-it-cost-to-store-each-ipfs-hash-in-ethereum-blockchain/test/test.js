'use strict';
(async () => {

  const IPFSStorage = artifacts.require('IPFSStorage.sol');
  const multihashes = require('multihashes');
  const cid = "QmWATWQ7fVPP2EFGu71UkfnqhYXDYH566qy47CnJDgvs8u";

  contract('IPFSStorage', function(accounts) {
  	let instance;
  	let gasPrice;

    before(function() {
    	gasPrice = web3.eth.gasPrice;
    	console.log("gasPrice: " + gasPrice);

        return IPFSStorage.deployed().then(function(inst) {
            instance = inst;
        });
    });

    it('should store the IPFS CID as a string', async () => {

        instance.storeCIDAsString(cid, {'from': accounts[0]}).then(function(txReceipt) {
    		console.log('# should store the IPFS CID as a string');

        	let gasUsed = txReceipt.receipt.gasUsed;
        	console.log("gasUsed: " + gasUsed + " units");

        	let gasCost = gasUsed*gasPrice;
        	console.log("gasCost (wei): " + gasCost + " wei");

        	let gasCostEth = web3.fromWei(gasCost, 'ether')
        	console.log("gasCost (ether): " + gasCostEth + " ether");
        }).catch(function (error) {
        	console.log(error);
      	});
    });

    it('should store the IPFS CID as a struct', async () => {

	    let mh = multihashes.fromB58String(Buffer.from(cid))
	    let args = {
	      hashFunction: '0x' + mh.slice(0, 2).toString('hex'),
	      digest: '0x' + mh.slice(2).toString('hex'),
	      size: mh.length - 2
	    }
        console.log(args);

        instance.storeCIDAsStruct(args.digest, args.hashFunction, args.size, {'from': accounts[0]}).then(function(txReceipt) {
    		console.log('# should store the IPFS CID as a struct');

        	let gasUsed = txReceipt.receipt.gasUsed;
        	console.log("gasUsed: " + gasUsed + " units");

        	let gasCost = gasUsed*gasPrice;
        	console.log("gasCost (wei): " + gasCost + " wei");

        	let gasCostEth = web3.fromWei(gasCost, 'ether')
        	console.log("gasCost (ether): " + gasCostEth + " ether");
        }).catch(function (error) {
        	console.log(error);
      	});
    });

    it('should store the IPFS CID in the logs', async () => {

        instance.storeCIDInTheLog(cid, {'from': accounts[0]}).then(function(txReceipt) {
    		console.log('# should store the IPFS CID in the logs');

        	let gasUsed = txReceipt.receipt.gasUsed;
        	console.log("gasUsed: " + gasUsed + " units");

        	let gasCost = gasUsed*gasPrice;
        	console.log("gasCost (wei): " + gasCost + " wei");

        	let gasCostEth = web3.fromWei(gasCost, 'ether')
        	console.log("gasCost (ether): " + gasCostEth + " ether");
        }).catch(function (error) {
        	console.log(error);
      	});
    });

  });

})();
