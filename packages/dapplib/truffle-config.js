require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remember push inflict entire front term'; 
let testAccounts = [
"0xa4c038ff482756d5527a4b716adb656dd358eb0fadb1f1f72f6c1baf6e7aad96",
"0x32aa2ff75e59ab7c10cae03ad4a35cc820a845b8f573442122cc43e328d02b13",
"0xb680bd10200a0280be971d0087bf3d9d9bb77905fee39c28776aafd008cc1cd8",
"0xa64fe38979a33840cc4c73652c449ce76273acc54907b6d6ba972baaff45729d",
"0x67022d9ba68b41acaeb31750713fb723dea4f180c985e93a545d6dac061e35d4",
"0xbff79f127367000a5835e8f8db9d3a66647eddd89fb210213cf39a121dc03f3a",
"0xe270ebe7f0c8a6f8cc57cb29ac5daab7f4b28ea50cb08c97692775bbbbb54a2c",
"0x888ad5ef545a16d682ec884809edff1df953e846bd8d54d6a122cb4c91ec9590",
"0xa53509515858077bc850729378cda4fbd0fa09f9c09f5a16cc3efd7bf50bb2f5",
"0x52fa410c2bd2f8ff653f6e05baf638612cba8fa81587a071f915602e1c863491"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


