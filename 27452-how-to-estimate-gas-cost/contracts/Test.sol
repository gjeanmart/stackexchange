pragma solidity ^0.4.15;


contract Test {

    uint data;
     
    function Test() {
        data = 1;
    }
     
    function set(uint x) {
        data = data * x;
    }
    
    function get() constant returns (uint) {
        return data;
    }

}
