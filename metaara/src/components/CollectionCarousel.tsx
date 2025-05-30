'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import Next.js Image component
import { Card, CardContent, CardTitle } from './ui/card'; // Assuming ShadCN Card component

// Define Collection type
interface Collection {
  id: string;
  name: string;
  description: string;
  featuredImage: string; // Placeholder for a collection image
}

// Placeholder data for collections
const collections: Collection[] = [
  {
    id: 'collection-1',
    name: 'Cyberpunk Dreams',
    description: 'A collection exploring the neon-lit streets of a futuristic metropolis.',
    featuredImage: '/collection-placeholder-1.jpg',
  },
  {
    id: 'collection-2',
    name: 'Abstract Digital',
    description: 'Unique abstract pieces generated from complex algorithms.',
    featuredImage: '/collection-placeholder-2.jpg',
  },
  {
    id: 'collection-3',
    name: 'Metaverse Explorers',
    description: 'Art depicting the pioneers of the digital frontier.',
    featuredImage: '/collection-placeholder-3.jpg',
  },
  {
    id: 'collection-4',
    name: 'Synthwave Visions',
    description: 'Inspired by the sounds and aesthetics of synthwave.',
    featuredImage: '/collection-placeholder-4.jpg',
  },
];

const CollectionCarousel: React.FC = () => {
  // Basic carousel structure - 3D effect and interactivity can be added later
  return (
    <div className="w-full overflow-hidden py-8">
      <h2 className="text-3xl font-heading text-center mb-8">Featured Collections</h2>
      <motion.div
        className="flex gap-6 px-4" // Add padding to see items at the edges
        // Example of potential drag constraints if making it draggable
        // drag="x"
        // dragConstraints={{ left: -collections.length * 300, right: 0 }} // Adjust based on item width and gap
      >
        {collections.map((collection, index) => (
          <motion.div
            key={collection.id}
            className="flex-none w-64" // Fixed width for carousel items
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            // Potential 3D transform example (requires more complex setup)
            // style={{ transform: `rotateY(${index * 10}deg)` }}
          >
            <Card className="h-full flex flex-col">
            <Image
              src={collection.featuredImage}
              alt={collection.name}
              width={256} // Placeholder width, adjust as needed
              height={160} // Placeholder height, adjust as needed (h-40 is 160px)
              className="w-full h-40 object-cover rounded-t-md"
            />
              <CardContent className="flex-grow flex flex-col justify-between p-4">
                <div>
                  <CardTitle className="text-xl font-heading mb-2">{collection.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{collection.description}</p>
                </div>
                {/* Add a button to view collection if needed */}
                {/* <Button className="mt-4">View Collection</Button> */}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CollectionCarousel;
