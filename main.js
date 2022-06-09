const Web3 = require('web3');
const { checkAddressChecksum } = require('web3-utils');
//const web3obj = new Web3("wss://speedy-nodes-nyc.moralis.io/1a2b3c4d5e6f1a2b3c4d5e6f/avalanche/mainnet/ws")
//https://avalanche.public-rpc.com
const web3obj = new Web3("https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc")

const account = web3obj.eth.accounts.create();

//web3obj.eth.accounts.wallet;

/*
// whole Endpoint Details fetching at once
console.log(web3obj)

// Account Details
console.log(account);


// privatekey address
console.log('privatekey address =>', account.privateKey)

// account address
console.log('address =>', account.address)

// Getting balance 
web3obj.eth.getBalance("0x0Ae16470701a05d06EE081eF223D93C90124b94A").then(console.log);

// Main
// Returns the current block number.
web3obj.eth.getBlockNumber()
.then(console.log);


// Returns a block matching the block number or block hash.
web3obj.eth.getBlock(3150)
.then(console.log);


// Returns the number of transaction in a given block.
web3obj.eth.getBlockTransactionCount("0x45220bce6c2384dcd506d7bdaf470a93fdc6686e4172aecc41eec2859db059d4")
.then(console.log);



//Returns a transaction matching the given transaction hash.
web3obj.eth.getTransaction('0x45220bce6c2384dcd506d7bdaf470a93fdc6686e4172aecc41eec2859db059d4')
.then(console.log);


//Returns the receipt of a transaction by transaction hash.
var receipt = web3obj.eth.getTransactionReceipt('0x45220bce6c2384dcd506d7bdaf470a93fdc6686e4172aecc41eec2859db059d4')
.then(console.log);


//Get the number of transactions sent from this address.
web3obj.eth.getTransactionCount("0xcb65dad78320a8d15ad8a88001324e4e163ca534")
.then(console.log);
*/

// Get Pending Transcations
//web3obj.eth.getPendingTransactions().then(console.log);



//var receipt = web3obj.eth.getPendingTransactions().then(console.log);



// some tried execution ! Need to do ..
/*
web3obj.eth.getPendingTransactions("0xcb65dad78320a8d15ad8a88001324e4e163ca534")
.then(console.log);
let explorerLink='https://ropsten.etherscan.io/';

const checkbalance = async (address) => {
    balance = 'getbalance' + getbalance;
} 
*/

// Get Pending Transcations
//web3obj.eth.getPendingTransactions().then(console.log);



//var receipt = web3obj.eth.getPendingTransactions().then(console.log);


//var options = web3obj.eth.getPendingTransactions(0xcb65dad78320a8d15ad8a88001324e4e163ca534).then(console.log);

//web3obj.eth.getPendingTransactions().then(console.log);
