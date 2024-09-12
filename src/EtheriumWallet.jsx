import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";

const EtheriumWallet = ({ mnemonic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [addresses, setAddresses] = useState([]);

  async function genWallet() {
    try {
      const seed = await mnemonicToSeed(mnemonic); // Await for async call
      const derivationPath = `m/44'/60'/0'/0/${currentIndex}`;
      
      const hdNode = HDNodeWallet.fromSeed(seed);
      const child = hdNode.derivePath(derivationPath);
      const privateKey = child.privateKey;
      
      const wallet = new Wallet(privateKey);
      setCurrentIndex(currentIndex + 1);
      
      // Add the new wallet's address to the state
      setAddresses([...addresses, wallet.address]);
    } catch (error) {
      console.error("Error generating Ethereum wallet:", error);
    }
  }

  return (
    <div className="flex flex-col space-y-2 text-white  bg-gray-700 p-[30px] m-[10px] rounded-xl">
      <button className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" onClick={genWallet}>Add Ethereum Wallet</button>
      <h1 className="font-bold text-white">Wallet Addresses-</h1>
      {addresses.map((address, index) => (
        <div className="font-mono" key={index}>{address}</div>
      ))}
    </div>
  );
};

export default EtheriumWallet;
