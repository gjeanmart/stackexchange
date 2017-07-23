pragma solidity ^0.4.4;

contract MyContract {
    address public owner;
    
    function MyContract() {
        owner = msg.sender;
    }
}