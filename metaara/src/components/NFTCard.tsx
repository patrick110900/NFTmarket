'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { HeartIcon } from '@radix-ui/react-icons'; // Assuming Radix Icons for the heart icon
import Image from 'next/image';

interface NFTCardProps {
  nft: {
    id: string;
    image: string;
    title: string;
    creator: string;
    price: number;
    isLiked?: boolean;
  };
  index: number; // For staggered animation
}

const NFTCard: React.FC<NFTCardProps> = ({ nft, index }) => {
  const [isLiked, setIsLiked] = React.useState(nft.isLiked || false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
    // TODO: Implement actual like functionality (e.g., update state in parent or context)
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
      whileHover={{ scale: 1.05 }}
      className="w-full max-w-sm"
    >
      <Card className="overflow-hidden bg-card border-purple-500/20 hover:border-cyan-500/20 transition-colors duration-300">
        <div className="relative w-full h-64">
          <Image
            src={nft.image}
            alt={nft.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-purple-400">{nft.title}</h3>
          <p className="text-sm text-muted-foreground">by {nft.creator}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xl font-bold text-cyan-400">{nft.price} ETH</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLikeToggle}
              className={`rounded-full ${isLiked ? 'text-red-500' : 'text-muted-foreground hover:text-red-500'}`}
            >
              <motion.div
                whileTap={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <HeartIcon className="h-5 w-5" fill={isLiked ? 'currentColor' : 'none'} />
              </motion.div>
            </Button>
          </div>
        </CardContent>
        {/* Optional CardFooter for Buy button */}
        <CardFooter className="p-4 pt-0">
          <Button className="w-full">Buy Now</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default NFTCard;
