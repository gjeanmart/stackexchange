pragma solidity ^0.4.15;

import 'SafeMath.sol';
import 'Ownable.sol';

contract Weechain is Ownable{

  using SafeMath for uint256;

  uint256 public energyTotalSupply;
  uint256 public powerTotalSupply;

  struct Device {
    uint256 energyValue;
    uint256 powerValue;
  }
  mapping(address => Device) amount;

  event setEnergyEvent(address indexed device, uint256 energy); 
  event setPowerEvent(address indexed device, uint256 power);
  event setPayloadEvent(uint256 indexed SQN, string payload);

  // Constructor
  function Weechain() {

    energyTotalSupply = 0;
    powerTotalSupply = 0;

    amount[owner].energyValue = energyTotalSupply;
    amount[owner].powerValue = powerTotalSupply;
  }

  function amountOfenergy(address dev) constant returns (uint256 energy) {
    return amount[dev].energyValue;
  }
  function amountOfpower(address dev) constant returns (uint256 power) {
    return amount[dev].powerValue;
  }

  function setPayload(uint256 SQN, string payload) public returns (bool) {

    emit setPayloadEvent(SQN, payload);

    return true;
  }

  function setEnergy(address dev, uint256 energy) public returns(bool) {
    require(dev != address(0));

    amount[dev].energyValue = amount[dev].energyValue.add(energy);
    energyTotalSupply = energyTotalSupply.add(energy);

    emit setEnergyEvent(dev, energy);

    return true;
}

    function setPower(address dev, uint256 power) public returns (bool) {
    require(dev != address(0));

    amount[dev].powerValue = amount[dev].powerValue.add(power);
    powerTotalSupply = powerTotalSupply.add(power);

    emit setPowerEvent(dev, power);

    return true;
  }

}
