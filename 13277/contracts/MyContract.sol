pragma solidity ^0.4.8;

import './OraclizeI.sol';

contract MyContract is usingOraclize  {

    address constant oraclizeOAR = 0x6f485C8BF6fc43eA212E93BBF8ce046C7f1cb475;
    string title;

	modifier onlyOraclize {	
        if (msg.sender != oraclize_cbAddress()) throw; 
        _;
    } 
    
    function MyContract() {
        OAR = OraclizeAddrResolverI(oraclizeOAR);
    }

    function callOraclize() { 
        oraclize_query("URL", "json(https://jsonplaceholder.typicode.com/posts/1).title");
    }
    
    function __callback(bytes32 _id, string _result) onlyOraclize {      
        title = _result;
    }
    
    function getTitle() constant returns (string) {      
        return title;
    }
}
