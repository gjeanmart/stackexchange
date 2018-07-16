var SignatureRecover = artifacts.require("SignatureRecover.sol");

const       util            = require('ethereumjs-util'),
            Wallet          = require('ethereumjs-wallet');

contract('SignatureRecover', function(accounts) {

	it('ecrecover result matches address', async function () {
	    var address = accounts[0];
	    console.log("owner="+address);
	    const message = 'Lorem ipsum mark mark dolor sit amet, consectetur adipiscing elit. Tubulum fuisse, qua illum, cuius is condemnatus est rogatione, P. Eaedem res maneant alio modo.';

	    var sig = await generateSignature(address, message);
	    var ret = await verifySignature(address, message, sig);
	    SignatureRecover.deployed().then(function (instance) {
	    	instance.registerAddress(address, ret.encoded, ret.v, ret.r, ret.s, {from: address}).then(function(tx) {
	    		console.log(tx.logs);
	    	});

	    });
	});
})

var node = web3.version.node.split('/')[0];
console.log('Using node=' + node);
var testrpc = false;
var geth = false;
var parity = false;
if (node === 'Geth') geth = true;
if (node === 'EthereumJS TestRPC') testrpc = true;
if (node === 'Parity') parity = true;

console.log("testrpc="+testrpc)

function generateSignature (address, message) {
  console.log('Generating signature');
  console.log('  address=' + address);
  if (testrpc) {
    var encoded = web3.sha3(message);
  }
  if (geth || parity) {
    encoded = '0x' + Buffer.from(message).toString('hex');
  }
  console.log('  encoded message=' + encoded);
  return web3.eth.sign(address, encoded);
}

async function verifySignature (address, message, sig) {
  console.log('Verifying signature');
  console.log('  address=' + address);
  let encoded;

  if (testrpc) {
    //encoded = web3.sha3(message);
    encoded = util.hashPersonalMessage(util.toBuffer( web3.sha3(message)))
  } else if (geth || parity) {

    //encoded = web3.sha3('\x19Ethereum Signed Message:\n32' + web3.sha3(message).substr(2));
    encoded = util.hashPersonalMessage(util.toBuffer( web3.sha3(message)))

  }
  console.log('  encoded message=' + encoded.toString('hex'));
  if (sig.slice(0, 2) === '0x') sig = sig.substr(2);
  if (testrpc || geth) {
    var r = '0x' + sig.substr(0, 64);
    var s = '0x' + sig.substr(64, 64);
    var v =  web3.toDecimal(sig.substr(128, 2)) + 27
  }
  if (parity) {
    v = '0x' + sig.substr(0, 2);
    r = '0x' + sig.substr(2, 64);
    s = '0x' + sig.substr(66, 64);
  }
  console.log('  r: ' + r);
  console.log('  s: ' + s);
  console.log('  v: ' + v);

  var ret = {};
  ret.r = r;
  ret.s = s;
  ret.v = v;
  ret.encoded = '0x' + encoded.toString('hex');
  return ret;
}