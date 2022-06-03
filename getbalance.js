const Web3 = require('web3');
const { checkAddressChecksum } = require('web3-utils');
//const web3obj = new Web3("wss://speedy-nodes-nyc.moralis.io/1a2b3c4d5e6f1a2b3c4d5e6f/avalanche/mainnet/ws")
//https://avalanche.public-rpc.com
const web3obj = new Web3("https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc")

const account = web3obj.eth.accounts.create();
web3obj.eth.getBalance("0x0Ae16470701a05d06EE081eF223D93C90124b94A").then(console.log);


//web3obj.eth.getAccounts(console.log);

/*
const transaction = web3obj.transactions.createTransaction(
    sender,
    publicKey,
    receiver,
    nonce,
    actions,
    recentBlockHash
  );
*/
    /*
const provider =
    new ethers.providers.WebSocketProvider('https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc');

async function checkBalance() {
    balance = await provider.getBalance('0xbA56f2E34B0283Fa549Da6781000B5eD932B6e8B');
    console.log(ethers.utils.formatEther(balance));
}
*/

//checkBalance();
/*
console.log(web3obj)
console.log('privatekey address =>', account.privateKey)
console.log('address =>', account.address)
*/
//console.log('balance =>', account.getbalance)

//web3obj.eth.getBalance("0xbA56f2E34B0283Fa549Da6781000B5eD932B6e8B")
//console.log('balance = : ', web3obj.eth.getBalance(accounts[0x0806E4f9f392Bbb5Bf6884CA0d5A77bB379D16dD]));
//web3obj.eth.getBalance("0x0Ae16470701a05d06EE081eF223D93C90124b94A").then(console.log);
//console.log('balance =>', account.getbalance)

//checkBalance('0x0Ae16470701a05d06EE081eF223D93C90124b94A')

//checkBalance();
//console.log('balance =>', account.getbalance)

//console.log(getBalance)

//console.log("\nNetwork info:");

