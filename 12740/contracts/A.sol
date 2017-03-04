pragma solidity ^0.4.8;

import "./B.sol";

contract A {

   address[] public addElements;

   function A() payable {

   }

   function create() returns (address a) {
       B obj = new B();
       addElements.push(obj);
       return obj;
   }


   function getElements() returns (address[] ) {
       return addElements;
   }

}