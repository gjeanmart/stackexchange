pragma solidity ^0.4.11;

contract C {
    uint[] counters;
    function getCounter(uint index)
        returns (uint counter, bool error) {
            if (index >= counters.length) return (0, true);
            else return (counters[index], false);
        }
    function checkCounter(uint index) {
       
        uint counter;
        bool error;

        (counter, error) = getCounter(index);

        //if (error) { ... }
        //else { ... }
    }
}
