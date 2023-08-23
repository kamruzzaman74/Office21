import React from 'react';
import Image from 'next/image';

function Page() {
  return (
    <div className="p-4">
      <div className="flex justify-center items-center mb-6">
        <Image
          src="/ks.jpg"
          alt="Company Logo"
          width={150}
          height={150}
          className="rounded-full border-4 border-purple-600 shadow-md"
        />
      </div>
      <div className="text-center mb-8">
        <h1 className="text-5xl font-serif text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text mb-4">
          About Us
        </h1>
        <p className="text-gray-600 text-lg">
          Welcome to our visionary international agency dedicated to driving positive change through innovation and excellence.
        </p>
      </div>
      <section className="bg-yellow-200 p-6 rounded-md shadow-md mb-6">
        {/* Rest of your code */}
        <h2 className="text-3xl font-serif text-gradient bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text mb-4">
          Our History
        </h2>
        <p className="text-gray-700 text-lg mb-4">
          Our journey began in the early 2000s when a group of passionate individuals converged with a common vision.
        </p>
      </section>
      <section className="bg-green-200 p-6 rounded-md shadow-md mb-6">
        {/* Rest of your code */}
        <h2 className="text-3xl font-serif text-gradient bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg mb-4">
          At the core of our existence lies our mission to empower individuals with knowledge and provide ingenious solutions that drive positive global transformation.
        </p>
      </section>
      <section className="bg-blue-200 p-6 rounded-md shadow-md">
        {/* Rest of your code */}
        <h2 className="text-3xl font-serif text-gradient bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text mb-4">
          Our Services
        </h2>
        <p className="text-gray-700 text-lg mb-4">
          As a distinguished international agency, we offer an array of premium services encompassing strategic consultancy, cutting-edge technology solutions, and sustainable global development initiatives.
        </p>
      </section>
      <div className="text-center mt-8">
        <a
          href="/contact"
          className="text-purple-600 hover:text-purple-800 font-semibold text-lg"
        >
          Contact Us to Learn More
        </a>
      </div>
    </div>
  );
}

export default Page;
