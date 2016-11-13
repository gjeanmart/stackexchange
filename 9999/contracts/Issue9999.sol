pragma solidity ^0.4.4;

contract Issue9999 {

    mapping (address => bytes32) student_hashes;
	
	function sendHash(address student_id, bytes32 hash_value) returns(bool sufficient) 
	{ 
		student_hashes[student_id] = hash_value;        
		return true; 
	}
	function getHash(address student_id) constant returns(bytes32 hash) 
	{       
		return student_hashes[student_id]; 
	}

}