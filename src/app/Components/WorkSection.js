// components/WorkSection.js
import React from 'react';

const sectors = [
  {
    title: 'Healthcare',
    description: 'Transforming healthcare through innovative software solutions.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Finance',
    description: 'Empowering the financial industry with cutting-edge technology.',
    color: 'from-blue-500 to-green-500',
  },
  {
    title: 'Education',
    description: 'Shaping the future of education through digital solutions.',
    color: 'from-red-500 to-yellow-500',
  },
];

const WorkSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
          Our <span className="text-yellow-400">Work</span>
        </h2>
        <p className="text-gray-600 mt-2">Sectors We Serve and Future Plans</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out bg-gradient-to-r ${sector.color}`}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{sector.title}</h3>
              <p className="text-gray-200">{sector.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-gray-600">
          As a software company, we are dedicated to expanding our horizons and revolutionizing various sectors through technology.
        </p>
      </div>
    </section>
  );
};

export default WorkSection;


