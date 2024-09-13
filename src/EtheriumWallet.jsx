import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";

const EtheriumWallet = ({ mnemonic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [addresses, setAddresses] = useState([]);

  async function genWallet() {
    try {
      const seed = await mnemonicToSeed(mnemonic);
      const derivationPath = `m/44'/60'/0'/0/${currentIndex}`;
      const hdNode = HDNodeWallet.fromSeed(seed);
      const child = hdNode.derivePath(derivationPath);
      const wallet = new Wallet(child.privateKey);

      setCurrentIndex(currentIndex + 1);
      setAddresses([...addresses, wallet.address]);
    } catch (error) {
      console.error("Error generating Ethereum wallet:", error);
    }
  }

  return (
    <div className="mr-6 bg-gray-800 p-6 rounded-lg shadow-lg text-white space-y-4">
      <h2 className="text-xl font-bold">Ethereum Wallet</h2>
      <p className="text-sm text-gray-400">Click the button below to generate a new Ethereum wallet address.</p>
      <button onClick={genWallet} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
        Add Ethereum Wallet
      </button>
      <div className="mt-4">
        <h3 className="font-semibold text-yellow-400">Generated Addresses:</h3>
        {addresses.map((address, index) => (
          <div key={index} className="mt-2 font-mono bg-gray-900 p-2 rounded">
            {address}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EtheriumWallet;
