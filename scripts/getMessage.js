
const hre = require("hardhat")
const { encryptDataField, decryptNodeResponse } = require("@swisstronik/swisstronik.js")

async function sendShieldedQuery(provider, destination, data){

    const rpclink = hre.network.config.url;
    const[encryptedData,usedEncryptedKey]=await encryptDataField(rpclink, data)

    const response = await provider.call({
       to: destination,
       data: encryptedData,

    });

    return await decryptNodeResponse(rpclink, response, usedEncryptedKey);

}

async function main(){
    const contractAddress = "0x49944571D04a1E7F36B90Da2C193451b812b6198"
    const [signer] = await hre.ethers.getSigners();
    const swissContract = await hre.ethers.getContractFactory("Swisstronik");
    const contract = swissContract.attach(contractAddress)

    const functionName = "getMessage";
    const responseMessage = await sendShieldedQuery(signer.provider, contractAddress, contract.interface.encodeFunctionData(functionName));

    console.log("Decoded response:", contract.interface.decodeFunctionResult(functionName, responseMessage)[0]);


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});