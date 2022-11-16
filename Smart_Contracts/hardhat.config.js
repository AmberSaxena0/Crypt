// https://eth-goerli.g.alchemy.com/v2/f5hpIj23ufKzwPDbbUhpefraDjOaZphN

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.1',
  networks:{
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/f5hpIj23ufKzwPDbbUhpefraDjOaZphN', 
      accounts: [ '26c368ebd2cc087954a79a7d03dab044c70e763e613c8fe1b74932ecdbe86061' ]
    }
  }
}