pragma solidity ^0.4.11;

contract Basic {
    bytes32 value;

    function Basic() {
        value = "mcansado";
    }

    function getValue() constant returns(bytes32) {
        return value;
    }

    function setValue(bytes32 _value)  {
        value = _value;
    }
}