import React from 'react';

const FlexSection = ({ imageUrl, heading, paragraph }) => {
  return (
    <div className="max-w-md mx-auto rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="relative">
        <img className="h-48 w-full object-cover rounded-t-xl" src={imageUrl} alt="Card" />
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{heading}</h3>
        <p className="text-gray-600 text-base mb-4">{paragraph}</p>
        <a href="#" className="text-pink-400 hover:text-pink-500">Read more</a>
      </div>
    </div>
  );
};

export default FlexSection;





