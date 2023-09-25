const {ethers} = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("https://json-rpc.testnet.swisstronik.com/");
const contractAddress="0x49944571D04a1E7F36B90Da2C193451b812b6198";
const slotNumber = 0x0;
provider.getStorageAt(contractAddress, slotNumber,"latest").then((slotValue) => {
  console.log(slotValue); 
});


// 0xdc94f92aefdc8fe62f6bd581377ca3d970f56d8ac1be5102562a818ba4917b82
// 0x0000000000000000000000000000000000000000000000000000000000000000




