pragma solidity ^0.4.17;

contract SignatureRecover {
	
    event Test(bytes32 _msgHash, uint8 _v, bytes32 _r, bytes32 _s);
    event LogRegisterAddress(address _addr);

    function registerAddress(address _addr, bytes32 _msgHash, uint8 _v, bytes32 _r, bytes32 _s) public returns (bool) {        
        emit Test(_msgHash, _v, _r, _s);   
        if (_v < 27) _v += 27;
        emit Test(_msgHash, _v, _r, _s);        
        if (_v != 27 && _v != 28) revert();
        emit Test(_msgHash, _v, _r, _s);
        if(ecrecover(_msgHash, _v, _r, _s) != _addr)
        {
            emit Test(_msgHash, _v, _r, _s);
            revert();
        }

        //registeredAddresses[_addr] = true;

        emit LogRegisterAddress(_addr);

        return true;
    }
}
