var Offer = artifacts.require("./Offer.sol");

contract('Offer', function(accounts) {
  it("should be able to send a transaction", function() {
    return Offer.deployed().then(function(instance) {
      return instance.addOffer("desc", "title", 10, ((new Date()).getTime()/1000));
    }).then(function(transaction) {
        console.log(transaction);
      assert.equal(transaction != null, true, "Transaction not send");
    });
  });
  
  it("should have one offer", function() {
    return Offer.deployed().then(function(instance) {
      return instance.returnNbroffer();
    }).then(function(result) {
        console.log(result);
      assert.equal(result, 1, "Nbroffer != 1");
    });
  });
 
});
