var accounts;
var account;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function refresh_rate() {
  var meta = MainContract.deployed();

  meta.returnRate.call({from: account}).then(function(value) {
    var rate_element = document.getElementById("rate");
    rate_element.innerHTML = value.valueOf();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting rate; see log.");
  });
};

function update_rate() {
  var meta = MainContract.deployed();

  var newRate = parseInt(document.getElementById("newRate").value);

  setStatus("Initiating transaction... (please wait)");

  meta.updateReturnRate(newRate, {from: account, gas:100000}).then(function() {
    setStatus("Transaction complete!");
    refresh_rate();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error updating rate; see log.");
  });
};

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];

    refresh_rate();
  });
}
