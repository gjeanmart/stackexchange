pragma solidity ^0.4.4;

contract MainContract {

    address minter;
    uint public returnRate;


    function MainContract(uint _returnRate) {
        minter = msg.sender;
        returnRate = _returnRate;
    }        

    modifier onlyMinter {
        if (msg.sender != minter) throw;
        _;
    }

     function updateReturnRate(uint newReturnRate) onlyMinter {
        returnRate = newReturnRate;
     } 

}