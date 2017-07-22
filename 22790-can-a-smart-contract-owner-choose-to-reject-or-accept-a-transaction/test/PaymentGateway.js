var PaymentGateway = artifacts.require("./PaymentGateway.sol");

contract('PaymentGateway', function(accounts) {

    it("should have 1 pending transaction", function() {
        
        var paymentGatewayInstance;
        
        return PaymentGateway.deployed().then(function(instance) {
            paymentGatewayInstance = instance;
            return instance.receivePayment({from: accounts[0], value: web3.toWei(5, "ether")});
        
        }).then(function(tx) {
            console.log(tx);
            
            return paymentGatewayInstance.getPendingTransactions.call({from: accounts[0]});
        
        }).then(function(pendingTransactions) {
            console.log(pendingTransactions);
        
            assert.equal(pendingTransactions.length > 0, true, "no pending transaction");
            
            return paymentGatewayInstance.getTransactionDetail.call(pendingTransactions[0].toNumber(), {from: accounts[0]});
        
        }).then(function(transactionDetails) {
            console.log(transactionDetails);

        });
    });
    
    it("should have 2 pending transaction", function() {
        
        var paymentGatewayInstance;
        
        return PaymentGateway.deployed().then(function(instance) {
            paymentGatewayInstance = instance;
            return instance.receivePayment({from: accounts[0], value: web3.toWei(5, "ether")});
        
        }).then(function(tx) {
            console.log(tx);
            
            return paymentGatewayInstance.getPendingTransactions.call({from: accounts[0]});
        
        }).then(function(pendingTransactions) {
            console.log(pendingTransactions);
        
            assert.equal(pendingTransactions.length > 0, true, "no pending transaction");
            
            return paymentGatewayInstance.getTransactionDetail.call(pendingTransactions[0].toNumber(), {from: accounts[0]});
        
        }).then(function(transactionDetails) {
            console.log(transactionDetails);

        });
    });
    
    it("sequence", function() {
        
        var paymentGatewayInstance;
        
        return PaymentGateway.deployed().then(function(instance) {
            paymentGatewayInstance = instance;

            return paymentGatewayInstance.sequence.call({from: accounts[0]});
        
        }).then(function(sequence) {
            console.log("sequence="+sequence.toNumber());
        })
    });
    
    it("nbPendingTrasanction", function() {
        
        var paymentGatewayInstance;
        
        return PaymentGateway.deployed().then(function(instance) {
            paymentGatewayInstance = instance;

            return paymentGatewayInstance.nbPendingTrasanction.call({from: accounts[0]});
        
        }).then(function(nbPendingTrasanction) {
            console.log("nbPendingTrasanction="+nbPendingTrasanction.toNumber());
        })
    });
    
    it("should have 1 pending transaction", function() {
        
        var paymentGatewayInstance;
        
        return PaymentGateway.deployed().then(function(instance) {
            paymentGatewayInstance = instance;
            return instance.acceptPayment(0, {from: accounts[0]});
        
        }).then(function(tx) {
            console.log(tx);
            
            return paymentGatewayInstance.getPendingTransactions.call({from: accounts[0]});
        
        }).then(function(pendingTransactions) {
            console.log(pendingTransactions);
        
            assert.equal(pendingTransactions.length > 0, true, "no pending transaction");

        });
    });
    
    it("sequence", function() {
        
        var paymentGatewayInstance;
        
        return PaymentGateway.deployed().then(function(instance) {
            paymentGatewayInstance = instance;

            return paymentGatewayInstance.sequence.call({from: accounts[0]});
        
        }).then(function(sequence) {
            console.log("sequence="+sequence.toNumber());
        })
    });
    
    it("nbPendingTrasanction", function() {
        
        var paymentGatewayInstance;
        
        return PaymentGateway.deployed().then(function(instance) {
            paymentGatewayInstance = instance;

            return paymentGatewayInstance.nbPendingTrasanction.call({from: accounts[0]});
        
        }).then(function(nbPendingTrasanction) {
            console.log("nbPendingTrasanction="+nbPendingTrasanction.toNumber());
        })
    });    
    
    it("should have 1 pending transaction", function() {
        
        var paymentGatewayInstance;
        
        return PaymentGateway.deployed().then(function(instance) {
            paymentGatewayInstance = instance;
            return instance.refundPayment(0, {from: accounts[0]});
        
        }).then(function(tx) {
            console.log(tx);
            
            return paymentGatewayInstance.getPendingTransactions.call({from: accounts[0]});
        
        }).then(function(pendingTransactions) {
            console.log("****************************");
            console.log(pendingTransactions);
            console.log("****************************");
        
            assert.equal(pendingTransactions ==null || pendingTransactions.length == 0, true, "pending transaction");

        });
    });
    
    it("sequence", function() {
        
        var paymentGatewayInstance;
        
        return PaymentGateway.deployed().then(function(instance) {
            paymentGatewayInstance = instance;

            return paymentGatewayInstance.sequence.call({from: accounts[0]});
        
        }).then(function(sequence) {
            console.log("sequence="+sequence.toNumber());
        })
    });
    
    it("nbPendingTrasanction", function() {
        
        var paymentGatewayInstance;
        
        return PaymentGateway.deployed().then(function(instance) {
            paymentGatewayInstance = instance;

            return paymentGatewayInstance.nbPendingTrasanction.call({from: accounts[0]});
        
        }).then(function(nbPendingTrasanction) {
            console.log("nbPendingTrasanction="+nbPendingTrasanction.toNumber());
        })
    });
    
});
