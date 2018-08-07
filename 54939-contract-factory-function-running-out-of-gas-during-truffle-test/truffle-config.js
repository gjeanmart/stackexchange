'use strict';

module.exports = {
  networks: {
    local: {
      host: 'localhost',
      port: 9545,
      gas: 6000000,
      gasPrice:1,
      network_id: '*'
    }
  }
};