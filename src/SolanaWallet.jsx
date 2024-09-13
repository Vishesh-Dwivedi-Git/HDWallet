import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

const SolanaWallet = ({ mnemonic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [publickeys, setPublicKeys] = useState([]);

  async function genWallet() {
    try {
      const seed = await mnemonicToSeed(mnemonic);
      const path = `m/44'/501'/${currentIndex}'/0'`;
      const derivedSeed = derivePath(path, seed.toString("hex")).key;

      if (derivedSeed.length !== 32) {
        console.error("Derived seed is not 32 bytes");
        return;
      }

      const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
      const keypair = Keypair.fromSecretKey(secret);

      setCurrentIndex(currentIndex + 1);
      setPublicKeys([...publickeys, keypair.publicKey.toBase58()]);
    } catch (error) {
      console.error("Error generating wallet:", error);
    }
  }

  return (
    <div className="ml-4 bg-gray-800 p-6 rounded-lg shadow-lg text-white space-y-4">
      <h2 className="text-xl font-bold">Solana Wallet</h2>
      <p className="text-sm text-gray-400">Click the button below to generate a new Solana wallet address.</p>
      <button onClick={genWallet} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
        Add Solana Wallet
      </button>
      <div className="mt-4">
        <h3 className="font-semibold text-yellow-400">Generated Addresses:</h3>
        {publickeys.map((key, index) => (
          <div key={index} className="mt-2 font-mono bg-gray-900 p-2 rounded">
            {key}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolanaWallet;
