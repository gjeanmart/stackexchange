var EthUtil 			= require('ethereumjs-util');

const messageToSign = "hello world";
const privateKey = "43f2ee33c522046e80b67e96ceb84a05b60b9434b0ee2e3ae4b1311b9f5dcc46";

var msgHash = EthUtil.hashPersonalMessage(new Buffer(messageToSign));
var signature = EthUtil.ecsign(msgHash, new Buffer(privateKey, 'hex'));	
var signatureRPC =EthUtil.toRpcSig(signature.v, signature.r, signature.s)
console.log(signatureRPC);
