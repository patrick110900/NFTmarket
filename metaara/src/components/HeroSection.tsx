'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button'; // Assuming ShadCN Button component
import { useWeb3 } from '../context/Web3Context'; // Import useWeb3 hook
// import Particles from 'react-tsparticles'; // Optional: for actual particle background
// import { loadFull } from 'tsparticles'; // Optional: for actual particle background

const HeroSection: React.FC = () => {
  const { connectWallet, walletAddress } = useWeb3();

  // Optional: Particles configuration (requires react-tsparticles and tsparticles)
  // const particlesInit = async (main: any) => {
  //   await loadFull(main);
  // };

  // const particlesOptions = {
  //   background: {
  //     color: {
  //       value: "#0d47a1", // Dark blue background
  //     },
  //   },
  //   fpsLimit: 120,
  //   interactivity: {
  //     events: {
  //       onClick: {
  //         enable: true,
  //         mode: "push",
  //       },
  //       onHover: {
  //         enable: true,
  //         mode: "repulse",
  //       },
  //       resize: true,
  //     },
  //     modes: {
  //       push: {
  //         quantity: 4,
  //       },
  //       repulse: {
  //         distance: 200,
  //         duration: 0.4,
  //       },
  //     },
  //   },
  //   particles: {
  //     color: {
  //       value: ["#8a2be2", "#00ffff"], // Neon purple and cyan
  //     },
  //     links: {
  //       color: "#ffffff",
  //       distance: 150,
  //       enable: true,
  //       opacity: 0.5,
  //       width: 1,
  //     },
  //     collisions: {
  //       enable: true,
  //     },
  //     move: {
  //       direction: "none",
  //       enable: true,
  //       outModes: {
  //         default: "bounce",
  //       },
  //       random: false,
  //       speed: 2,
  //       straight: false,
  //     },
  //     number: {
  //       density: {
  //         enable: true,
  //         area: 800,
  //       },
  //       value: 80,
  //     },
  //     opacity: {
  //       value: 0.5,
  //     },
  //     shape: {
  //       type: "circle",
  //     },
  //     size: {
  //       value: { min: 1, max: 5 },
  //     },
  //   },
  //   detectRetina: true,
  // };


  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Optional: Particles background */}
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions as any}
        className="absolute inset-0 z-0"
      /> */}

      {/* Background Overlay/Simulation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900 opacity-80 z-0"></div>
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(138, 43, 226, 0.2) 0%, rgba(0, 255, 255, 0.2) 20%, rgba(0,0,0,0) 60%)',
        animation: 'pulse 10s infinite alternate',
      }}></div>
       {/* Add keyframes for pulse animation in globals.css */}


      <motion.div
        className="relative z-10 p-8 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-6xl md:text-7xl font-heading font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Discover Digital Art & Collectibles
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl font-body mb-8 text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Metaara is a futuristic marketplace for unique NFT creations.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Button size="lg" className="font-body">
            Explore NFTs
          </Button>
          {!walletAddress && (
            <Button size="lg" variant="secondary" className="font-body" onClick={connectWallet}>
              Connect Wallet
            </Button>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
