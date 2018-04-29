const Wallet = require('ethereumjs-wallet'),
       fs = require('fs');


const utcFile = "./UTC--2018-04-29T10-08-25.072Z--1f7c98090febf46155496a370002a10af7eb6766"
const password = "password123"


const myWallet = Wallet.fromV3(fs.readFileSync(utcFile).toString(), password, true);

console.log("Private Key: " + myWallet.getPrivateKey().toString('hex')) 
console.log("Address: " + myWallet.getAddress().toString('hex')) 
