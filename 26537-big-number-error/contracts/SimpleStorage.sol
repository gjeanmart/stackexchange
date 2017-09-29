pragma solidity ^0.4.0; 

contract SimpleStorage { 
string storedData; 

function set(string x) { 
storedData = x; 
} 

function get() constant returns (string) { 
return storedData; 
} 
}