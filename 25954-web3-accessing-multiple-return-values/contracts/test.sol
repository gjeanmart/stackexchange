pragma solidity ^0.4.4;

contract Test{
   function getAandB( uint x )returns ( uint a, uint b ){

       uint y = x * 2 ;
       return ( x , y );
   }
}