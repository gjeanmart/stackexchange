pragma solidity ^0.4.4;

contract MyContract {

    struct Datum {
        bool exists;
        bytes32 name;
        uint payment;
    }
    
    mapping(address => Datum) data;
    
    event debug(string data);
    
    function makeDatum(string dataStr)  payable returns (bool) {
        debug("datum");
        data[msg.sender].payment += msg.value;
    }

}