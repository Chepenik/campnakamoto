import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Camp Nakamoto</h1>
      <p className="text-2xl mb-8">Discover the Future of Blockchain Technology</p>
      <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
        Get Started
      </button>
    </div>
  );
}

export default HeroSection;
