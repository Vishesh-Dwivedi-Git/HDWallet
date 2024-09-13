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
    <div className='h-screen w-full bg-slate-800 flex justify-center items-center'>
    {!mnemonic && (
      <div className='flex flex-col bg-gray-700 p-[30px] m-[10px] rounded-md space-y-7 justify-center rounded-xl text-white text-xl font-serif border-slate-100 border-solid'>
      <button className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" onClick={genMnem}>
      Create Seed phrase
    </button>
    <input type='text' className='py-3 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600' value={mnemonic} readOnly></input>
    </div>)}
    {
      mnemonic && (
        <div className='flex flex-col space-y-5 rounded-xl'>
        <SolanaWallet  mnemonic={mnemonic}/>
        <EtheriumWallet mnemonic={mnemonic} />
        </div>
      )
    }
    </div>
  )
}

export default App
