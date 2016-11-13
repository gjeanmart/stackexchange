
# Compile contract and deploy
## Create contract (init value = 20) 
*2_deploy_contracts.js*
```
module.exports = function(deployer) {
  deployer.deploy(MainContract, 20);
};
```

`# truffle migrate --compile-all --verbose-rpc`

# Get contract's address

`# truffle networks`

```
Network: default
  MainContract: 0x878a3ae27b6f0d6fe820599ee5aa496bd53da15d
```

# Manually Test contract

`# truffle console`

```
truffle(default)> var c = MainContract.deployed()
truffle(default)> c.returnRate.call()
{ [String: '20'] s: 1, e: 1, c: [ 20 ] }
truffle(default)> c.updateReturnRate(30)
'0x642d24031f582730000c37dd254173944840e5e771fbb0b74c032bd74f7294ba'
truffle(default)> c.returnRate.call()
{ [String: '30'] s: 1, e: 1, c: [ 30 ] }
truffle(default)>
```
