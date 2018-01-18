var TestCrowdsale = artifacts.require("./TestCrowdsale.sol");

module.exports = function(deployer) {
   deployTestCrowdsale(deployer);
};

function deployTestCrowdsale(deployer) {

   const accounts = web3.eth.accounts;

   const startTime = latestTime();
   const endTime = startTime + duration.days(45);
   const rate = 2500;
   const goal = web3.toWei(250, 'ether');
   const cap = web3.toWei(4000, 'ether');
   const wallet = accounts[0];

   return deployer.deploy(TestCrowdsale, startTime, endTime, rate, wallet);

}

function latestTime() {
  return web3.eth.getBlock('latest').timestamp;
}

const duration = {
   seconds: function (val) { return val; },
   minutes: function (val) { return val * this.seconds(60); },
   hours: function (val) { return val * this.minutes(60); },
   days: function (val) { return val * this.hours(24); },
   weeks: function (val) { return val * this.days(7); },
   years: function (val) { return val * this.days(365); },
};