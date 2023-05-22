const hre = require("hardhat");
async function main() {
  const Transfer = await ethers.getContractFactory("Transfer");
  const transfer = await Transfer.attach("0x5d243f44aa4E28d3C225F9ef8837117C9F30cEFC");

  const senderAddress = "0x05fbBB7C2717B4E29BdAa71FAa4f42d4fA678496"; // Replace with the sender's address
  const recipientAddress = "0xeA55162c5A74d0e812961B8a033a876ed79A959b"; // Replace with the recipient's address
  const amount = ethers.utils.parseEther("0.01"); // Replace with the amount of Ether to transfer
  // transfer.transferEther(recipientAddress,{value:amount});
  const signer = ethers.provider.getSigner(senderAddress);
  // // { value: amount } đc truyền vào msg.value
  const transferTx = await transfer.connect(signer).transferEther(recipientAddress, { value: amount });
  await transferTx.wait();

  //chuyển cho nhiều giá trị 
  // const recipientAddresses = [
  //   "0x05fbBB7C2717B4E29BdAa71FAa4f42d4fA678496",
  //   "0xA568f956F9C6EE2c50f284fe93c216af706E122F",
  //   // Add more recipient addresses as needed
  // ];
  // const amounts = ["0.01","0.02"];
  
  // const transferTx = await transfer.connect(signer[0]).transferEtherMany(recipientAddresses, amount);
  // // await transferTx.wait();
  // console.log(transferTx);
  // for (let index = 0; index < recipientAddresses.length; index++) {
  //   const element = recipientAddresses[index];
  //   // const amountElement = ethers.utils.parseEther(amounts[index]);
  //   const transferTx = await transfer.connect(signer).transferEther(element, { value: amount });
  //   await transferTx.wait();
  // }
  console.log("Ether transferred successfully! ");
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});