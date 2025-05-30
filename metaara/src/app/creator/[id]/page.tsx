'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
// import NFTCard from ''components/NFTCard'' (see below for file content); // Will use this later

const CreatorProfilePage: React.FC = () => {
  const params = useParams();
  const creatorId = params.id;

  // Dummy data for demonstration (replace with fetching creator data and their NFTs)
  const dummyCreator = {
    id: creatorId,
    name: `Creator ${creatorId}`,
    bio: `This is the profile page for creator ${creatorId}. They are a talented digital artist creating unique NFTs.`,
    avatarUrl: '/placeholder-avatar.jpg', // Placeholder avatar
  };

  const creatorNFTs = [
    { id: 'creator-nft-1', imageUrl: '/placeholder-nft-6.jpg', title: 'Cosmic Dust', creator: dummyCreator.name, price: '0.2 ETH', likes: 30 },
    { id: 'creator-nft-2', imageUrl: '/placeholder-nft-7.jpg', title: 'Quantum Leap', creator: dummyCreator.name, price: '0.12 ETH', likes: 18 },
  ];

  return (
    <motion.div
      className="container mx-auto py-12 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        <Image src={dummyCreator.avatarUrl} alt={dummyCreator.name} width={128} height={128} className="w-32 h-32 rounded-full object-cover" />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-heading mb-2">{dummyCreator.name}</h1>
          <p className="text-gray-400">{dummyCreator.bio}</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-heading mb-4">NFTs by {dummyCreator.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
           {/* {creatorNFTs.map(nft => (
            <NFTCard key={nft.id} nft={nft} />
          ))} */}
           {/* Placeholder for NFT Cards */}
          {creatorNFTs.map(nft => (
            <div key={nft.id} className="bg-gray-800 rounded-lg p-4 text-white">
              <Image src={nft.imageUrl} alt={nft.title} width={192} height={192} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-bold">{nft.title}</h2>
              <p className="text-sm text-gray-400">by {nft.creator}</p>
              <p className="text-lg font-semibold mt-2">{nft.price}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CreatorProfilePage;
