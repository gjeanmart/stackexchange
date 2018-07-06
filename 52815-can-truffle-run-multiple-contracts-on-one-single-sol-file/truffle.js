var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "xxxxxxxxxx";
module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        },
        ropsten: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "ropsten.infura.io/CF0hhTkBMfb9deEWlCHw")
            },
            network_id: 3
        }
    }
};