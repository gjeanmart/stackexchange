    pragma solidity ^0.4.24;

import "zos-lib/contracts/migrations/Migratable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract TokenFactory is Migratable {

    address[] public deployedTokens;

    function createToken(string name, string symbol) public {
        address newToken = new Token(name,symbol,msg.sender);
        deployedTokens.push(newToken);            
    }

    function getDeployedTokens() public view returns (address[]) {
        return deployedTokens;
    }

}

contract Token is StandardToken, Ownable {
    string public name = ""; 
    string public symbol = "";
    uint public decimals = 2;
    uint public INITIAL_SUPPLY = 10000 * (10 ** decimals);

    constructor(string _name, string _symbol, address creator) {
        owner = creator;        
        name = _name;
        symbol = _symbol;
        totalSupply_ = INITIAL_SUPPLY;
    }    
}