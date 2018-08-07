pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/TokenFactory.sol";

contract TestTokenFactory {

    TokenFactory tk = TokenFactory(DeployedAddresses.TokenFactory());

    function testChildContractDeployed() public {

        tk.createToken("xxx","sym");
        address[] memory deployedTokens = tk.getDeployedTokens();
        Assert.equal(deployedTokens.length, 1, "Contact is not deployed");

    }

}