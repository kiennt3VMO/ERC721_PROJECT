require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */
const ALCHEMY_POLYGON_API_KEY = "9gd2hZXDxdArvE90PAizgM0Wpf5rm7NI";
const privateKey1 = "8e8904351d0193b2bc475c743a3a17f7b6aead6a4aa6348d1046fdfd60748e89";
// const privateKey2 = "8e8904351d0193b2bc475c743a3a17f7b6aead6a4aa6348d1046fdfd60748e89";
module.exports = {
  solidity: "0.8.18",
   etherscan:{
    apiKey:"8PZUZCGI3QRRDBFJB8CM3YBYJTZ8MPN5BP",
  },
  networks:{
    polygon:{
      url:`https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_POLYGON_API_KEY}`,
      accounts: [privateKey1],
    }
  }
};