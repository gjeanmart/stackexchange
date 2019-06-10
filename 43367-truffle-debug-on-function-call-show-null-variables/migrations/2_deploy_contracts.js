let TruffleDebug = artifacts.require('TruffleDebug');

module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(TruffleDebug);

    let instance = await TruffleDebug.deployed();

    console.log(instance);

    const result = await instance.Deposit(
                  1521568000,
                  "0xffcec51439a3a7195c8f5c32732bfc2bf66688a13c1d52fc9d5e548f4733b5c1",
                  "0x0e0060f625534293d280547bd8a782da45333b95",
                  {from: accounts[0], gas:900000, value: 1});

    console.log(result)
};
