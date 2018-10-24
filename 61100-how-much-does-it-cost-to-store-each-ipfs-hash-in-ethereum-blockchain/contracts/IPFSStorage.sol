pragma solidity ^0.4.20;

contract IPFSStorage {

    string hash;


	function storeCIDAsString(string _hash) public {
		hash = _hash;
	}

	//////////////////////////////

	struct Multihash {
	  	bytes32 hash;
	  	bytes2 hash_function;
	  	uint8 size;
	}

	Multihash multihash;

	function storeCIDAsStruct(bytes32 _hash, bytes2 _hash_function, uint8 _size) public {
		
		Multihash memory multihashMemory;
		multihash.hash = _hash;
		multihash.hash_function = _hash_function;
		multihash.size = _size;

		multihash = multihashMemory;
	}

	//////////////////////////////

    event CIDStoredInTheLog(string _hash);

	function storeCIDInTheLog(string _hash) public {
		
		emit CIDStoredInTheLog(_hash);
	}

}