// THIS DOES NOT WORK:
//const web3Url = 'https://ropsten.infura.io/CuTBtVMqx3zc8cAASK3H';
//const web3 = new Web3(new Web3.providers.HttpProvider(web3Url));

// THIS WORKS:
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));


const allEvents = (event, callback) =>
  event({}, { fromBlock: 0, toBlock: 'latest' }).get((error, results) => {
  if (error) return callback(error);
  results.forEach(result => callback(null, result));
  event().watch(callback);
});

allEvents(contractInstance.Event, eventCallback);