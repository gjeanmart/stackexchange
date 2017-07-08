pragma solidity ^0.4.11;

import "./SilverCoin.sol";

contract Banker {

    address silverCoinAddress;
    
    function Banker(address _silverCoinAddress) {
        silverCoinAddress = _silverCoinAddress;
    }

    function abc_1() constant returns (uint) {
    
        SilverCoin instanceSilverCoin = SilverCoin(silverCoinAddress);
    
        return instanceSilverCoin.abc();
    }
}