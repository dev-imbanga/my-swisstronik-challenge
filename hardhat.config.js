require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

const SWISS_RPC_URL = process.env.SWISS_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url:SWISS_RPC_URL,
      accounts:[PRIVATE_KEY],
    },
  },
};
