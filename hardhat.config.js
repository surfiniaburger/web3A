require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config(); // Import dotenv to load .env variables

module.exports = {
  solidity: "0.8.27",
  networks: {
    arbitrum_sepolia: {
      url: 'https://arb-sepolia.g.alchemy.com/v2/BU55IFPwm8eddCh9di1L58nCBaP536sf', // Alchemy RPC URL for Arbitrum Sepolia
      chainId: 421614, // Arbitrum Sepolia testnet chain ID
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Your private key from the .env file
    },
  },
  etherscan: {
    apiKey: process.env.ARBITRUM_API_KEY, // Arbitrum Etherscan API key
    customChains: [
      {
        network: "arbitrum_sepolia",
        chainId: 421614,
        urls: {
          apiURL: "https://api-sepolia.arbiscan.io/api", // Arbiscan URL for Sepolia
          browserURL: "https://sepolia.arbiscan.io",
        },
      },
    ],
  }
};
