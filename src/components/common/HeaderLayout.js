import React from 'react';

export default function HeaderLayout() {

  return (

    <div className="relative w-full h-16 bg-gradient-to-r from-lime-400 via-green-500 to-green-600 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-lime-300 via-green-400 via-green-500 via-green-600 to-green-700"></div>

      {/* Pixelated elements on the left */}
      <div className="absolute left-0 top-0 w-8 h-8 bg-lime-400"></div>
      <div className="absolute left-8 top-0 w-6 h-6 bg-green-500"></div>
      <div className="absolute left-14 top-0 w-4 h-4 bg-lime-300"></div>
      <div className="absolute left-0 top-8 w-6 h-6 bg-green-600"></div>
      <div className="absolute left-6 top-8 w-8 h-8 bg-lime-500"></div>
      <div className="absolute left-14 top-8 w-6 h-6 bg-green-400"></div>
      <div className="absolute left-20 top-8 w-4 h-4 bg-lime-400"></div>

      {/* More pixelated elements scattered */}
      <div className="absolute left-24 top-0 w-6 h-6 bg-green-700"></div>
      <div className="absolute left-30 top-0 w-4 h-4 bg-lime-500"></div>
      <div className="absolute left-36 top-0 w-8 h-8 bg-green-400"></div>
      <div className="absolute left-44 top-0 w-6 h-6 bg-lime-300"></div>

      <div className="absolute left-26 top-8 w-4 h-4 bg-green-500"></div>
      <div className="absolute left-32 top-8 w-6 h-6 bg-lime-600"></div>
      <div className="absolute left-40 top-8 w-8 h-8 bg-green-600"></div>
      <div className="absolute left-48 top-8 w-4 h-4 bg-lime-400"></div>

      {/* Pixelated elements on the right */}
      <div className="absolute right-0 top-0 w-10 h-10 bg-lime-500"></div>
      <div className="absolute right-10 top-0 w-8 h-8 bg-green-600"></div>
      <div className="absolute right-18 top-0 w-6 h-6 bg-lime-400"></div>
      <div className="absolute right-24 top-0 w-4 h-4 bg-green-500"></div>

      <div className="absolute right-0 top-10 w-8 h-6 bg-green-700"></div>
      <div className="absolute right-8 top-10 w-6 h-6 bg-lime-300"></div>
      <div className="absolute right-14 top-10 w-10 h-6 bg-green-400"></div>
      <div className="absolute right-24 top-10 w-4 h-6 bg-lime-500"></div>

      {/* More right side pixels */}
      <div className="absolute right-30 top-0 w-6 h-6 bg-green-600"></div>
      <div className="absolute right-36 top-0 w-8 h-8 bg-lime-400"></div>
      <div className="absolute right-44 top-0 w-4 h-4 bg-green-500"></div>
      <div className="absolute right-48 top-0 w-6 h-6 bg-lime-600"></div>

      <div className="absolute right-28 top-8 w-4 h-8 bg-green-400"></div>
      <div className="absolute right-34 top-8 w-6 h-8 bg-lime-500"></div>
      <div className="absolute right-42 top-8 w-8 h-8 bg-green-700"></div>
      <div className="absolute right-50 top-8 w-4 h-8 bg-lime-300"></div>

      {/* Central area tweaks */}
      <div className="absolute left-1/2 top-0 w-6 h-6 bg-green-600 transform -translate-x-1/2"></div>
      <div className="absolute left-1/2 top-6 w-4 h-4 bg-lime-400 transform -translate-x-1/2"></div>
      <div className="absolute left-1/2 top-10 w-8 h-6 bg-green-500 transform -translate-x-1/2"></div>
    </div>

  );
}