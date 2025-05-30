'use client';

import HeroSection from '../components/HeroSection';
import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      {/* Other sections of the homepage will go here */}
    </main>
  );
};

export default Home;
