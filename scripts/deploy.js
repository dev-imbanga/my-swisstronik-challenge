
const hre = require("hardhat");

async function main() {
  
  const contract = await hre.ethers.deployContract("Swisstronik", ["Hello Swisstronik!!"]);

  await contract.waitForDeployment();

  console.log(`Swisstronik contract deployed to ${contract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// deployed to 0x49944571D04a1E7F36B90Da2C193451b812b6198