const Web3 = require('web3')
const Tx = require('ethereumjs-tx')
var lightwallet = require('eth-lightwallet');

// connect to Infura node
let rpcNodeUrl = 'https://rinkeby.infura.io/xxxxxxxxxxxxxxxxxxxx'
const web3 = new Web3(new Web3.providers.HttpProvider(rpcNodeUrl))

let accountAddress = 'xxxxxxxxxxxxxxxxxxxxxxx';
let accountKey = 'secr3t';
let seed = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

let balanceUnit = 'wei';

let bytecode = '608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a723058202ffa22ed4921064b44c0e1c71eb48634ab293f4b7ce71b781b27213d2d07c9a90029'

let existingBalance = web3.fromWei(web3.eth.getBalance(accountAddress), balanceUnit).toString();
console.log('existingBalance:', existingBalance, balanceUnit);

web3.eth.getGasPrice(function(error, result){

    const nonce     = web3.eth.getTransactionCount(accountAddress);
    console.log("nonce="+nonce)

    console.log('get gas price:', web3.fromWei(result.toString(), balanceUnit).toString(), balanceUnit);
    let gasPrice = web3.fromWei(result.toString(), balanceUnit).toString()
    console.log('gasPrice:', gasPrice, ' | in hex:', '0x'+gasPrice.toString(16));

    var gasEstimate = web3.eth.estimateGas({
                nonce: "0x"+nonce.toString(16),
                data: "0x"+bytecode,
                to: '0x0000000000000000000000000000000000000000',
                value: '0x0'
    });
    console.log('gasEstimate:', gasEstimate, ' | in hex:', '0x'+gasEstimate.toString(16));

    let gasCost = gasEstimate*gasPrice
    console.log('gasCost:', gasCost);

    console.log('\n ---------------------- * --------------------- \n');
    lightwallet.keystore.createVault({
        password: accountKey,
        seedPhrase: seed,
        hdPathString: "m/44'/60'/0'/0"
    }, function (err, ks) {
        ks.keyFromPassword(accountKey, function (err, pwDerivedKey) {

            var rawTx = {
                nonce: "0x"+nonce.toString(16),
                gasPrice: "0x"+gasPrice.toString(16),
                gasLimit: "0x"+gasEstimate.toString(16),
                data: "0x"+bytecode,
                to: '0x0000000000000000000000000000000000000000',
                value: '0x0'
            }
            console.log(rawTx)
            if(err) {
                console.log('err in retrieving key');
            }
            else {
                var tx = new Tx(rawTx);
                var privateKey = new Buffer(pwDerivedKey, 'hex')
                tx.sign(privateKey);
                var serializedTx = tx.serialize();
                web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
                    if (err) {
                        console.log('sendRawTransaction err:', err);
                    }
                    else {
                        console.log('sendRawTransaction hash:', hash);
                    }
                });
            }
        })
    });

})
