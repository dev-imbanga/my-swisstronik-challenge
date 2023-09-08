
const hre = require("hardhat")
const { encryptDataField, decryptNodeResponse } = require("@swisstronik/swisstronik.js")

async function sendShieldedTransaction(signer,destination,data,value){

    const rpclink = hre.network.config.url;
    const[encryptedData]=await encryptDataField(rpclink, data)
    return await signer.sendTransaction({
        from: signer.address,
        to: destination,
        data: encryptedData,
        value,
    });
};

async function main(){
    const contractAddress = "0x49944571D04a1E7F36B90Da2C193451b812b6198"
    const[signer] = await hre.ethers.getSigners()

    const swissContract = await hre.ethers.getContractFactory("Swisstronik");
    const contract = swissContract.attach(contractAddress)

    const setMessageTx = await sendShieldedTransaction(signer, contractAddress,contract.interface.encodeFunctionData("setMessage", ["Hello swisstronik!"]),0)
    await setMessageTx.wait();

    console.log("Transaction Receipt: ", setMessageTx );


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});