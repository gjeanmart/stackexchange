pragma solidity ^0.4.4;

contract MonolithToken{

    address public administrator;
    address public monolithTokenAddress;

    function MonolithToken(address _in) {
        monolithTokenAddress = _in ;
        administrator = msg.sender;
    }
    function setExchangeContractAddress(address _exchangeAddress) constant returns (bool success) {
        if(msg.sender == administrator) {
            monolithTokenAddress = _exchangeAddress;
            return true;
        } else {
            return false;
        }
    }
    
}