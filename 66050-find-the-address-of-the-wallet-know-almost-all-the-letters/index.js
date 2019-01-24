
(async () => {

    console.log("start");

    const Web3       = require('web3');
    const BigNumber  = require('big-numbers');

    const bn           = new BigNumber();
    const provider     = new Web3.providers.HttpProvider("https://mainnet.infura.io/");
    const web3         = new Web3(provider);

    const hexAlphabet = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    const input = "0xb6b2ceb624a6b667e67af1893b16706baec21";

    for (x of hexAlphabet) {
        for (y of hexAlphabet) {
            for (z of hexAlphabet) {
                let address = input + x + y + z;

                if(web3.utils.isAddress(address)) {
                    let balance = bn.of(await web3.eth.getBalance(address));

                    if(balance.greaterThan(bn.of(0))) {
                       console.log(address + "=" + web3.fromWei(balance, "ether"));
                    }
                }

            }
        }
    }

    console.log("end");

})();
