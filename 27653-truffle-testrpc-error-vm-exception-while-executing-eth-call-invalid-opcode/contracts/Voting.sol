pragma solidity ^0.4.2;

contract Voting {

mapping (bytes32 => uint8) public votesReceived;

uint8[] public totalVotes;

bytes32[] public candidateList;

function Voting(bytes32[] candidateNames) {
    candidateList = candidateNames;
}

// This function returns the total votes a candidate has received so far
function totalVotesFor(bytes32 candidate) returns (uint8) {
    if (validCandidate(candidate) == false) revert();
    return votesReceived[candidate];
}

//returns totalVotes
function getAllVotes() constant returns (uint8[]) {
        uint8[] memory totalVotes = new uint8[](candidateList.length);

        for(uint i = 0; i < candidateList.length; i++) {
            bytes32 candidate = candidateList[i];
            totalVotes[i] = votesReceived[candidate];
        }
        return totalVotes;
}

// This function returns all candidates
function getCandidateList() returns (bytes32[]) {
    return candidateList;
}

// This function increments the vote count for the specified candidate. This
// is equivalent to casting a vote
function voteForCandidate(bytes32 candidate) {
    if (validCandidate(candidate) == false) revert();
    votesReceived[candidate] += 1;
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