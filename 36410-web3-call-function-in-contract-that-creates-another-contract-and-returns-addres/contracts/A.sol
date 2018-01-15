pragma solidity ^0.4.18;

import './B.sol';

contract A {

	event newContractB(address contractAddress);

   function createB(uint valOfB) returns (uint){
       address addressB = new B(valOfB);

       newContractB(addressB);
   }
}