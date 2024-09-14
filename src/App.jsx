import React, { useState } from 'react';
import './App.css';
import SolanaWallet from './SolanaWallet';
import EtheriumWallet from './EtheriumWallet';
import SolanaGraph from './SolanaGraph';
import 'rc-texty/assets/index.css';
import Footer from './Footer';
import Grid3D from './Grid3D';  // Import the Grid3D component

function App() {
  const [mnemonic, setMnemonic] = useState('');

  // Generate the mnemonic for the wallets
  const genMnemonic = async () => {
    const bip39 = await import('bip39');
    const mnemonic = bip39.generateMnemonic();
    setMnemonic(mnemonic);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* 3D Grid */}
      <div className="absolute inset-0 z-0">
        <Grid3D />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="py-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-3xl font-bold">Dev Wallet</h1>
            <ul className="flex space-x-6">
              <li className="hover:text-yellow-300 cursor-pointer">Home</li>
              <li className="hover:text-yellow-300 cursor-pointer">About</li>
              <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-cover bg-center h-[50vh]" style={{ backgroundImage: "url('https://cryptocurrency-image-url.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Manage Your Crypto Wallets Securely</h2>
              <p className="text-lg">Generate, store, and manage your Ethereum and Solana wallets in one place.</p>
              <button onClick={genMnemonic} className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                Create Seed Phrase
              </button>
            </div>
          </div>
        </header>

        {/* Wallet Generators */}
        {mnemonic && (
          <div className="container mx-auto py-10">
            <h3 className="text-2xl font-bold mb-6 text-center">Generated Mnemonic: {mnemonic}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Solana Wallet */}
              <SolanaWallet mnemonic={mnemonic} />
              {/* Ethereum Wallet */}
              <EtheriumWallet mnemonic={mnemonic} />
            </div>
          </div>
        )}

        <SolanaGraph />  {/* Display Solana live chart below wallets */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
