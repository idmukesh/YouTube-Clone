import React from 'react';

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-gray text-white">
      <div className="flex flex-col items-center">
        {/* Loader Circle with animated rotation */}
        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-4 border-t-4 border-transparent border-t-gray-500 rounded-full animate-spin mb-4"></div>
        
        {/* Loading Text */}
        <p className="text-lg sm:text-xl md:text-2xl">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
