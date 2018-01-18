pragma solidity ^0.4.18;

import './crowdsale/Crowdsale.sol';

contract TestCrowdsale is Crowdsale {

   function TestCrowdsale(uint256 _startTime, uint256 _endTime, uint256 _rate, address _wallet)
      Crowdsale(_startTime, _endTime, _rate, _wallet)
      public
      {
   }

}