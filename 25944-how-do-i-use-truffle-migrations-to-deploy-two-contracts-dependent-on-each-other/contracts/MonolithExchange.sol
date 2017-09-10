pragma solidity ^0.4.4;

contract MonolithExchange{

    address public administrator;
    address public monolithExchangeAddress;

    function MonolithExchange(address _in) {
        monolithExchangeAddress = _in ;
        administrator = msg.sender;
    }
    function setExchangeContractAddress(address _exchangeAddress) constant returns (bool success) {
        if(msg.sender == administrator) {
            monolithExchangeAddress = _exchangeAddress;
            return true;
        } else {
            return false;
        }
    }
    
}