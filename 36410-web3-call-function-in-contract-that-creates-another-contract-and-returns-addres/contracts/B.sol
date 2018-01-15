pragma solidity ^0.4.18;

contract B {

	uint val;

	function B(uint _val) {
		val = _val;
	}

   function getVal() returns (uint){
       return val;
   }
}