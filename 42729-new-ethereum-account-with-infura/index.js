var keythereum = require("keythereum");

var params = { keyBytes: 32, ivBytes: 16 };

// synchronous
var dk = keythereum.create(params);
console.log(dk)

console.log(dk.privateKey.toString('utf8'));