'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface NftDetails {
  image: File | null;
  title: string;
  description: string;
  price: string;
  collection?: string;
}

interface Web3ContextType {
  walletAddress: string | null;
  connectWallet: () => void;
  disconnectWallet: () => void;
  mintNFT: (nftDetails: NftDetails) => Promise<boolean>; // Simulate minting
  purchaseNFT: (nftId: string) => Promise<boolean>; // Simulate purchasing
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export const Web3Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    // Load wallet address from localStorage on mount
    const storedAddress = localStorage.getItem('metaara_wallet_address');
    if (storedAddress) {
      setWalletAddress(storedAddress);
    }
  }, []);

  const connectWallet = () => {
    // Simulate connecting a wallet
    const simulatedAddress = '0x' + Math.random().toString(16).slice(2, 42); // Generate a dummy address
    setWalletAddress(simulatedAddress);
    localStorage.setItem('metaara_wallet_address', simulatedAddress);
    console.log('Simulated wallet connected:', simulatedAddress);
  };

  const disconnectWallet = () => {
    // Simulate disconnecting a wallet
    setWalletAddress(null);
    localStorage.removeItem('metaara_wallet_address');
    console.log('Simulated wallet disconnected');
  };

  const mintNFT = async (nftDetails: NftDetails): Promise<boolean> => {
    if (!walletAddress) {
      console.error('Cannot mint: Wallet not connected');
      return false;
    }
    console.log('Simulating minting NFT:', nftDetails);
    // Simulate a delay for the transaction
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Simulated NFT minted successfully!');
    // In a real app, this would interact with a smart contract
    return true;
  };

  const purchaseNFT = async (nftId: string): Promise<boolean> => {
     if (!walletAddress) {
      console.error('Cannot purchase: Wallet not connected');
      return false;
    }
    console.log('Simulating purchasing NFT with ID:', nftId);
    // Simulate a delay for the transaction
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(`Simulated purchase of NFT ${nftId} successful!`);
    // In a real app, this would interact with a smart contract
    return true;
  };

  return (
    <Web3Context.Provider value={{ walletAddress, connectWallet, disconnectWallet, mintNFT, purchaseNFT }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (context === undefined) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
};
