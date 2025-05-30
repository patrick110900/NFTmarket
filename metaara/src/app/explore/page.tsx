'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NFTCard from '../../components/NFTCard'; // Assuming NFTCard component path

// Placeholder data for NFTs
const dummyNFTs = [
  {
    id: '1',
    image: '/nft-placeholder-1.jpg', // Replace with actual image paths
    title: 'Neon Drifter',
    creator: '0xabc...123',
    price: 0.8, // Changed to number
  },
  {
    id: '2',
    image: '/nft-placeholder-2.jpg',
    title: 'Cybernetic Bloom',
    creator: '0xdef...456',
    price: 1.2, // Changed to number
  },
  {
    id: '3',
    image: '/nft-placeholder-3.jpg',
    title: 'Digital Wanderer',
    creator: '0xghi...789',
    price: 0.5, // Changed to number
  },
  {
    id: '4',
    image: '/nft-placeholder-4.jpg',
    title: 'Abstract Flow',
    creator: '0xjkl...012',
    price: 0.9, // Changed to number
  },
  {
    id: '5',
    image: '/nft-placeholder-5.jpg',
    title: 'Quantum Landscape',
    creator: '0xmnp...345',
    price: 1.5, // Changed to number
  },
  {
    id: '6',
    image: '/nft-placeholder-6.jpg',
    title: 'Synthwave City',
    creator: '0xqrst...678',
    price: 0.7, // Changed to number
  },
];

const ExplorePage: React.FC = () => {
  return (
    <motion.div
      className="container mx-auto py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-heading text-center mb-8">Explore NFTs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyNFTs.map((nft, index) => (
          <motion.div
            key={nft.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <NFTCard nft={nft} index={index} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExplorePage;
