'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useWeb3 } from '../../context/Web3Context'; // Import useWeb3 hook
import { Input } from '../../components/ui/input'; // Assuming ShadCN Input component
import { Textarea } from '../../components/ui/textarea'; // Assuming ShadCN Textarea component
import { Button } from '../../components/ui/button'; // Assuming ShadCN Button component
import { Label } from '../../components/ui/label'; // Assuming ShadCN Label component
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming ShadCN Card components

interface NftDetails {
  image: File | null;
  title: string;
  description: string;
  price: string;
  collection?: string;
}

const MintPage: React.FC = () => {
  const { walletAddress, mintNFT } = useWeb3();
  const [nftDetails, setNftDetails] = useState<NftDetails>({
    image: null,
    title: '',
    description: '',
    price: '',
    collection: '',
  });
  const [isMinting, setIsMinting] = useState(false);
  const [mintStatus, setMintStatus] = useState<'idle' | 'minting' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNftDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNftDetails(prevDetails => ({
        ...prevDetails,
        image: e.target.files![0],
      }));
    } else {
      setNftDetails(prevDetails => ({
        ...prevDetails,
        image: null,
      }));
    }
  };

  const handleGenerateWithAI = async () => {
    console.log('Simulating AI content generation...');
    // TODO: Integrate with Genkit's generateNftDetailsFlow
    // For now, simulate some generated content
    setNftDetails(prevDetails => ({
      ...prevDetails,
      title: prevDetails.title || 'Generated NFT Title',
      description: prevDetails.description || 'This is a simulated AI-generated description for your NFT.',
      price: prevDetails.price || '0.1 ETH',
      collection: prevDetails.collection || 'AI Collection',
    }));
    console.log('Simulated AI content generated.');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!walletAddress) {
      alert('Please connect your wallet first.');
      return;
    }
    if (!nftDetails.image || !nftDetails.title || !nftDetails.description || !nftDetails.price) {
      alert('Please fill in all required fields (Image, Title, Description, Price).');
      return;
    }

    setIsMinting(true);
    setMintStatus('minting');
    const success = await mintNFT(nftDetails);

    if (success) {
      setMintStatus('success');
      // Reset form after successful mint
      setNftDetails({
        image: null,
        title: '',
        description: '',
        price: '',
        collection: '',
      });
      // Optionally, navigate to the dashboard or NFT page
    } else {
      setMintStatus('error');
    }
    setIsMinting(false);
  };

  return (
    <motion.div
      className="container mx-auto py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-heading text-center mb-8">Mint New NFT</h1>

      {!walletAddress ? (
        <p className="text-center text-muted-foreground">Please connect your wallet to mint an NFT.</p>
      ) : (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Create Your NFT</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="image">NFT Image</Label>
                <Input id="image" type="file" accept="image/*" onChange={handleImageChange} required />
                {nftDetails.image && (
                  <p className="text-sm text-muted-foreground mt-1">Selected: {nftDetails.image.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="e.g., Neon Drifter"
                  value={nftDetails.title}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe your NFT..."
                  value={nftDetails.description}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Price (ETH)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  placeholder="e.g., 0.5"
                  value={nftDetails.price}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="collection">Collection (Optional)</Label>
                <Input
                  id="collection"
                  name="collection"
                  placeholder="e.g., Cyberpunk Collection"
                  value={nftDetails.collection}
                  onChange={handleInputChange}
                />
              </div>

              <Button type="button" onClick={handleGenerateWithAI} variant="secondary" className="w-full">
                Generate with AI (Placeholder)
              </Button>

              <Button type="submit" className="w-full" disabled={isMinting}>
                {isMinting ? 'Minting...' : 'Mint NFT'}
              </Button>

              {mintStatus === 'success' && (
                <p className="text-center text-green-500 mt-4">NFT minted successfully!</p>
              )}
              {mintStatus === 'error' && (
                <p className="text-center text-red-500 mt-4">Error minting NFT. Please try again.</p>
              )}
            </form>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
};

export default MintPage;
