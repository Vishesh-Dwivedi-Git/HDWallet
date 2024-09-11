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
      const seed = await mnemonicToSeed(mnemonic); // Await since mnemonicToSeed is async
      const path = `m/44'/501'/${currentIndex}'/0'`;
      const derivedSeed = derivePath(path, seed.toString("hex")).key;

      // Ensure derivedSeed is 32 bytes
      if (derivedSeed.length !== 32) {
        console.error("Derived seed is not 32 bytes");
        return;
      }

      const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
      const keypair = Keypair.fromSecretKey(secret);

      setCurrentIndex(currentIndex + 1);
      console.log("Public key of Solana wallet -->", keypair.publicKey.toBase58());
      
      // Add public key to the state
      setPublicKeys([...publickeys, keypair.publicKey.toBase58()]);
    } catch (error) {
      console.error("Error generating wallet:", error);
    }
  }

  return (
    <div>
      <button onClick={genWallet}>Add Solana Wallet</button>
      {publickeys.map((p, index) => (
        <div key={index}>{p}</div>
      ))}
    </div>
  );
};

export default SolanaWallet;
