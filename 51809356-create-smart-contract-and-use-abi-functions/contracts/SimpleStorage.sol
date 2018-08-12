pragma solidity ^0.4.2;

contract SimpleStorage {
    uint public value;
    
    function SimpleStorage() {
        value = 1;
    }

    function setValue(uint val) {
        value = val;
    }
    
    function getValue() returns(uint) {
        return value;
    }

}