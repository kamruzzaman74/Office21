import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="bg-white min-h-screen pt-10 flex flex-col items-center justify-center text-gray-800">
      <div className="w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md text-white p-12 mb-8">
        <div className="p-6 rounded-md bg-white bg-opacity-20 backdrop-blur-md">
          <h1 className="text-4xl font-extrabold mb-2 text-center">🌟 Exploring Technology Insights 🌟</h1>
        </div>
        <div className="prose mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">Embrace the World of Innovation</h2>
          <p className="text-lg text-gray-600">
            Welcome to our globally connected tech blog! Join us as we delve into the latest trends, discoveries, and breakthroughs in the world of technology.
          </p>
          <p className="text-lg text-gray-600">
            Our diverse team of experts collaborates across borders to create solutions that drive progress and redefine industry standards.
          </p>
        </div>
      </div>
      <div className="w-full max-w-screen-xl px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Enterprise Software Role Blog Post */}
          <div className="flex items-center space-x-6 hover:bg-gray-100 p-4 rounded-md">
            <div className="flex-shrink-0">
              <Image
                src="/Ri.jpg" // Replace with the actual path to your image
                alt="Enterprise Software"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-600">Evolving with Enterprise Software</h3>
              <p className="text-gray-600">
                Dive into how enterprise software powers global businesses, optimizing processes and unlocking new horizons for growth.
              </p>
            </div>
          </div>
          
          {/* Software Development Process Blog Post */}
          <div className="flex items-center space-x-6 hover:bg-gray-100 p-4 rounded-md">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-pink-600">Crafting Innovation Through Software</h3>
              <p className="text-gray-600">
                Discover the intricacies of our software development process, where creativity and precision converge on a global scale.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/oo.jpg" // Replace with the actual path to your image
                alt="Software Development"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
          </div>
          
          {/* Add more blog posts here */}
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-yellow-300 to-orange-400 rounded-md shadow-md text-white p-8 mt-12 text-center">
        <h1 className="text-4xl font-extrabold mb-4">🎨 Fueling Creativity Through Technology 🎨</h1>
        <p className="text-lg text-gray-800">
          Our dedication to innovation is driven by the power of creative thinking. We believe that technology is a canvas for limitless possibilities, and we're committed to exploring every avenue of imagination.
        </p>
      </div>
      {/* Beautiful design element */}
      <div className="w-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-md shadow-md text-white p-8 mt-12 text-center">
        <p className="text-2xl font-extrabold">🚀 Ready to Dive into the Future? 🚀</p>
        <p className="text-lg mt-2">Join us on this exciting journey of technological exploration.</p>
        <button className="mt-4 px-6 py-2 bg-white text-blue-500 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Page;
