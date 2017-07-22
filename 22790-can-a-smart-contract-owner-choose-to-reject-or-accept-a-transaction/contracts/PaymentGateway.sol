pragma solidity ^0.4.11;

contract PaymentGateway {

    //***********************
    //* Structure and enums     
    //*
    //***********************/

    enum State {
        PENDING,
        ACCEPTED,
        REFUNDED
    }
    
    struct Transaction {
        uint            id;
        address         from;
        uint256         amount;
        State           state;
        uint            date;
    }
    
    //***********************
    //* Data                
    //*
    address public owner;
    uint  constant AUTO_REFUND_AFTER = 5 days;
    uint public sequence;
    uint public nbPendingTrasanction = 0;
    mapping(uint => Transaction) db;
    uint256 pendingVolume = 0;
    uint256 availableVolume = 0;
    //***********************/
    
    
    //***********************
    //* Modifier    
    //*

    modifier onlyOwner {
        if (msg.sender != owner) throw;
        _;
    }
    //***********************
    
    
    //***********************
    //* Events      
    //*
    event received_payment(uint id, address from, uint amount, State state, uint date);
    //***********************/
    
    
    //***********************
    //* Constructor    
    //*
    function PaymentGateway() {
        owner = msg.sender;
        sequence = 0;  
    }
    //***********************/
    
    
    //***********************
    //* Getter   
    //*
    
    /**
     * @dev Return the list of pending transactions
     * @return array of transaction ID
     */
    function getPendingTransactions() constant returns (uint[]) {
    
        if(nbPendingTrasanction == 0) {
            return new uint[](0);
        }
    
        uint[] memory policyIDArray  = new uint[](nbPendingTrasanction);
        
        uint index = 0;
        for (var id = 0; id < sequence ; id++) {
            Transaction memory t  = db[id];
        
            if(t.state == State.PENDING) {
                policyIDArray[index] = t.id;
                index++;
            }
        }
    
        return (policyIDArray);
    }
    
    /**
     * @dev Return a transaction details
     * @param _id Transaction ID
     * @return ID
     * @return from
     * @return amount
     * @return state
     * @return date
     */
    function getTransactionDetail(uint _id) constant returns (uint, address, uint256, State, uint) {
        return (db[_id].id, db[_id].from, db[_id].amount, db[_id].state, db[_id].date);
    }
    //***********************/
    

    //***********************
    //* Public functions    
    //*
    
    /**
     * @dev Receive a payment into the gateway
     */
    function receivePayment() payable {
         
        Transaction memory t; 
        t.id             = sequence;
        t.from           = msg.sender;
        t.amount         = msg.value;
        t.state          = State.PENDING;
        t.date           = now;
        
        // Store the transaction
        db[t.id]  = t;
        
        // Increment sequence
        sequence++; 
        
        // Increment the no of pending transactions
        nbPendingTrasanction++;
        
        // Add the amount to the pending volume
        pendingVolume += msg.value; 
        
        // Trigger event
        received_payment(t.id, t.from, t.amount, t.state, t.date);
    }
    
    /**
     * @dev Accept a payment transaction and tag it as accepted
     * @param _id Transaction ID
     */
    function acceptPayment(uint _id) onlyOwner {
         db[_id].state = State.ACCEPTED;
         
        //TODO Safe check
        // Move the amount to the available volume
        availableVolume += db[_id].amount; 
        pendingVolume -= db[_id].amount; 
        
        
        // Decrement the no of pending transactions
        nbPendingTrasanction--;
    }
    
    
    /**
     * @dev Refund a payment transaction
     * @param _id Transaction ID
     */
    function refundPayment(uint _id) onlyOwner {
    
        // Check if the transaction amount is greater than 0
        require(db[_id].amount != 0);
        
        // Check if the contract balance is greater than the amount asked to refund
        require(this.balance >= db[_id].amount);

        // Change the state to REFUNDED
        db[_id].state = State.REFUNDED;


        //TODO Safe check
        // Remove the fund from the pending volume
        pendingVolume -= db[_id].amount;
        
        // Decrement the no of pending transactions
        nbPendingTrasanction--;
        
        // Execute the payment refund
        assert(db[_id].from.send(db[_id].amount));
    }
    
    /**
     * @dev Allows the owner to transfer funds
     * @param _to The address to transfer funds
     * @param _amount Amount to transfert
     */
    function transfer(address _to, uint256 _amount) onlyOwner {
         //TODO Transfer the fund to another address
    }
    
    
    /**
     * @dev Allows the current owner to transfer control of the contract to a newOwner.
     * @param _newOwner The address to transfer ownership to.
     */
    function transferOwnership(address _newOwner) onlyOwner {
        owner = _newOwner;
    }
    
    //***********************/
     
     
     
    //***********************
    //* Private functions       
    //*
    
    //***********************/
    

}
