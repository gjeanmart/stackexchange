pragma solidity ^0.5.6;

contract DocRegistry {

  struct Doc {
      address sender;
      uint date;
      bytes32 hash;
  }

  /**
   *  @dev Storage space used to record all documents
   */
  mapping(bytes32 => Doc) registry;

  /**
   *  @dev Store a document identified by its 32 bytes hash by recording the hash, the sender and date in the registry
   *  @dev Emit an event HashStored in case of success
   *  @param _hash Document hash
   */
  function storeHash(bytes32 _hash) external returns (bool) {
    registry[_hash].sender = msg.sender;
    registry[_hash].date = now;
    registry[_hash].hash = _hash;

    emit HashStored(msg.sender, _hash);

    return true;
  }

  /**
   *  @dev Definition of the event triggered when a document is successfully stored in the registry
   */
  event HashStored(address indexed _sender, bytes32 _hash);
}
