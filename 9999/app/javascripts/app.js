var accounts;
var account;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function sendHash() {
  var c = Issue9999.deployed();

  var hash = parseInt(document.getElementById("hash").value);

  setStatus("Initiating transaction... (please wait)");

  c.sendHash(account, hash, {from: account}).then(function() {
    setStatus("Transaction complete!");
  }).catch(function(e) {
    console.log(e);
    setStatus("Error sending coin; see log.");
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
  });
}
