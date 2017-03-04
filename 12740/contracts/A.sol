pragma solidity ^0.4.8;

import "./B.sol";

contract A {

   address[] public addElements;

   
    event newAddress(address a);
   
   function A() payable {

   }

   function create() returns (address a) {
       B obj = new B();
       addElements.push(obj);
       newAddress(obj);
   }


   function getElements() returns (address[] ) {
       return addElements;
   }

}