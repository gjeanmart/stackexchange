pragma solidity ^0.4.22;

contract Storage {

    bytes32 storage;

    function Storage() public { }

    function setStorage(bytes32 _storage) public {
        storage = _storage;
    }

    function getStorage() public view returns (bytes32) {
        return storage;
    }
}
