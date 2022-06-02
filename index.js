const Web3 = require('web3');
const { checkAddressChecksum } = require('web3-utils');
const web3obj = new Web3("wss://speedy-nodes-nyc.moralis.io/1a2b3c4d5e6f1a2b3c4d5e6f/avalanche/mainnet/ws")
const account = web3obj.eth.accounts.create();
console.log('address =>', account.address)
//console.log('privatekey address =>', account.privateKey)
//console.log('balance =>', account.getbalance)

//web3obj.eth.getBalance("0xE4379d4A927d39188c287512cb348bC3346f9e07")
//console.log('balance = : ', web3.eth.getBalance(accounts[0xE4379d4A927d39188c287512cb348bC3346f9e07]));

//checkBalance('0xE4379d4A927d39188c287512cb348bC3346f9e07')
//async function checkBalance() {
   // balance = await provider.getBalance('0x2910543af39aba0cd09dbb2d50200b3e800a63d2');
    //console.log(ethers.utils.formatEther(balance));
//}
//checkBalance();
//web3obj.eth.getBalance("0x0Ae16470701a05d06EE081eF223D93C90124b94A").then(console.log);
//console.log('balance =>', account.getbalance)

//console.log(getBalance)
