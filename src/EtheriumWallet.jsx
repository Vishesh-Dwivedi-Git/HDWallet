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
    <div>
      <button onClick={genWallet}>Add Ethereum Wallet</button>
      {addresses.map((address, index) => (
        <div key={index}>{address}</div>
      ))}
    </div>
  );
};

export default EtheriumWallet;
