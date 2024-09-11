import { useState } from 'react'
import {generateMnemonic} from "bip39";
import './App.css'
import SolanaWallet from "./SolanaWallet";
import EtheriumWallet from "./EtheriumWallet";

function App() {
  const [mnemonic, setMnemonic] = useState("")
  async function genMnem(){
    const mn=await generateMnemonic();
    setMnemonic(mn);
  }

  return (
    <>
    {!mnemonic && (
      <div>
      <button onClick={genMnem}>
      Create Seed phrase
    </button>
    <input type='text' value={mnemonic} readOnly></input>
    </div>)}
    {
      mnemonic && (
        <div>
        <SolanaWallet mnemonic={mnemonic}/>
        <EtheriumWallet mnemonic={mnemonic} />
        </div>
      )
    }
    </>
  )
}

export default App
