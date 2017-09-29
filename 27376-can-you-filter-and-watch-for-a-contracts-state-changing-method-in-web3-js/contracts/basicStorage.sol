pragma solidity ^0.4.15;

contract basicStorage {
    uint storedData;
     
    event SetEvent(
        address indexed _from,
        uint _x
    );
     
    function set(uint x) {
        storedData = x;
        
        // Log event
        SetEvent(msg.sender, x);
    }
    
    function get() constant returns (uint) {
        return storedData;
    }
}