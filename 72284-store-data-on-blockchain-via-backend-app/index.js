(async () => {

  // Connect to the Blockchain and unlock the wallet to send transaction
  const HDWalletProvider = require("truffle-hdwallet-provider");
  const mnemonic = "mnemonic 12 workds"; // 12 word mnemonic
  const provider = new HDWalletProvider(mnemonic, "http://localhost:8545");

  // Load the Truffle artefact
  const truffleContract = require("truffle-contract");
  const DocRegistryJSON = require('./build/contracts/DocRegistry.json');
  const DocRegistry = truffleContract(DocRegistryJSON)
  DocRegistry.setProvider(provider);

  const docRegistryInstance = await DocRegistry.deployed();

  // Send transaction
  const hash = "0x644bcc7e564373040999aac89e7622f3ca71fba1d972fd94a31c3bfbf24e3938";
  var result = await docRegistryInstance.storeHash(hash, {from: "0x09b99dc4c7f7a1f6feffade28500e8f163e96d97"});

  console.log(result)
})();
