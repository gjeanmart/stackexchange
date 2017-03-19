pragma solidity ^0.4.8;

contract Offer {

    address public owner;
    struct Offer {
        string title;
        string description;
        uint  offerTime;
        mapping (address => uint) subscribers;
        mapping (uint => address) subscribersAddress;
        mapping (uint => uint) nbrSubscribersPerID;
        uint price;
    }

    Offer[] public  offers;


    // add offer
    function addOffer(string  description1, string title1, uint price1,uint offerTime1) 
      returns (uint, string, string, uint, uint) {
        uint offerID = offers.length++;
        Offer memory o = offers[offerID];

        o.description = description1;
        o.offerTime=offerTime1;
        o.title = title1;
        o.price = price1;
        return (offerID, offers[offerID].description, offers[offerID].title, offers[offerID].price, 
          offers[offerID].offerTime);
    }

    //return the  number of offers 
    function returnNbroffer() constant public returns(uint) {
        uint nbr_offer =offers.length;
        return(nbr_offer);
    }
}