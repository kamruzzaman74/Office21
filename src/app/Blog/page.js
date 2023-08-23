import React from 'react';
import Image from 'next/image';
const Page = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 min-h-screen pt-10 flex flex-col items-center justify-center text-gray-800">
      <div className="w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md text-white p-6 md:p-12 mb-8">
        {/* Title Section */}
        <div className="p-4 md:p-6 rounded-md bg-white bg-opacity-20 backdrop-blur-md">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center">
            🌟 Exploring Technology Insights 🌟
          </h1>
        </div>
        {/* Description */}
        <div className="prose mt-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-green-600">
            Embrace the World of Innovation
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Welcome to our globally connected tech blog! Join us as we delve into the latest trends, discoveries, and breakthroughs in the world of technology.
          </p>
          <p className="text-base md:text-lg text-gray-600">
            Our diverse team of experts collaborates across borders to create solutions that drive progress and redefine industry standards.
          </p>
        </div>
      </div>
      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-xl px-4 md:px-8">
        <div className="bg-white rounded-md shadow-md p-4 md:p-6">
          <Image src="/Ri.jpg" alt="Technology" className="rounded-md "  height="300" width="300"/>
          <p className="text-center text-gray-600 mt-2">Exploring New Frontiers</p>
        </div>
        <div className="bg-white rounded-md shadow-md p-4 md:p-6">
          < Image src="/oo.jpg" alt="Innovation" className="rounded-md "   height="300" width="300"/>
          <p className="text-center text-gray-600 mt-2">Driving Innovation Globally</p>
        </div>
      </div>
      {/* Fueling Creativity Section */}
      <div className="w-full bg-gradient-to-r from-yellow-300 to-orange-400 rounded-md shadow-md text-white p-6 md:p-8 mt-6 md:mt-12 text-center transform hover:scale-105 transition-transform">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          🎨 Fueling Creativity Through Technology 🎨
        </h1>
        <p className="text-base md:text-lg text-gray-800">
          Our dedication to innovation is driven by the power of creative thinking. We believe that technology is a canvas for limitless possibilities, and we&apos;re committed to exploring every avenue of imagination.
        </p>
      </div>
      {/* Get Started Section */}
      <div className="w-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-md shadow-md text-white p-6 md:p-8 mt-6 md:mt-12 text-center transform hover:scale-105 transition-transform">
        <p className="text-xl md:text-2xl font-extrabold">
          🚀 Ready to Dive into the Future? 🚀
        </p>
        <p className="text-base md:text-lg mt-2">
          Join us on this exciting journey of technological exploration.
        </p>
        <button className="mt-4 px-4 md:px-6 py-2 bg-white text-blue-500 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Page;
