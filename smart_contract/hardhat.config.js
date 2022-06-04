// https://eth-goerli.alchemyapi.io/v2/dcDJXKkI_QzJFuJkMjdLMU3A4LMLtUR5

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/dcDJXKkI_QzJFuJkMjdLMU3A4LMLtUR5',
      accounts: ['a00652836adbe2147cfcec75515eb6be62640ea79ae61774128f142d627576f9']
    }
  }
}
