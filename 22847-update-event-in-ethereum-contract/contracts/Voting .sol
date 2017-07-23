pragma solidity ^0.4.11;

contract Voting {

    mapping (bytes32 => uint8) public votesReceived;

    address sender;

    bytes32[] public candidateList;

    
    event Updatestatus (string _msg,address sender);

    
    function Voting(bytes32[] candidateNames) {
        candidateList = candidateNames;
    }

    function totalVotesFor(bytes32 candidate) returns (uint8) {
        if (validCandidate(candidate) == false) throw;
        return votesReceived[candidate];
    }

    function voteForCandidate(bytes32 candidate) payable {
        if (validCandidate(candidate) == false) 
            throw;
        else{
            Updatestatus("First vote casted by",msg.sender);
            votesReceived[candidate] += 1;

        }
    }

    function validCandidate(bytes32 candidate) returns (bool) {
        for(uint i = 0; i < candidateList.length; i++) {
            if (candidateList[i] == candidate) {
                return true;
            }
        }
        return false;
    }
}