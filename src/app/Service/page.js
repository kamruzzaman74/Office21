import React from 'react';
import FlexSection from '../PictureShow/FlexSection';

const Page = () => {
  return (
    <div className="py-8 bg-gray-100">
      <div className="text-center mb-6">
        <div className="inline-block p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
          <h1 className="text-4xl font-extrabold text-white">
            Our Services
          </h1>
        </div>
        <p className="text-gray-600 mt-2 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-lg font-semibold p-4 rounded-lg">
          Discover what we have to offer
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <FlexSection
          imageUrl="kk.jpg"
          heading="Vibrant Colors"
          paragraph="Experience the world in vibrant hues and explore nature's colorful palette."
        />
        <FlexSection
          imageUrl="kk.jpg"
          heading="Serene Landscapes"
          paragraph="Escape to tranquil landscapes that soothe your soul and calm your mind."
        />
        <FlexSection
          imageUrl="kk.jpg"
          heading="Adventure Awaits"
          paragraph="Embark on thrilling adventures and make memories that last a lifetime."
        />
      </div>
    </div>
  );
}

export default Page;





