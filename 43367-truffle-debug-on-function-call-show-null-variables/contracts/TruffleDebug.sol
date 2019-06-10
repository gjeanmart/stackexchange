pragma solidity ^0.5.6;


contract TruffleDebug {

  function Deposit (uint256 timeout, bytes32 hash, address recipient) public payable returns (uint256)  {
       emit AcceptCommitted(timeout, hash, recipient);
       return 1;
   }


   event AcceptCommitted(uint256 indexed timeout, bytes32 indexed hash, address indexed recipient);

}
