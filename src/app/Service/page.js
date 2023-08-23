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
          imageUrl="/P.jpg"
          heading="Web Development"
          paragraph="Our expert team creates stunning and functional websites tailored to your business goals."
        />
        <FlexSection
          imageUrl="/yyy.jpg"
          heading="Mobile App Development"
          paragraph="Transform your ideas into engaging and user-friendly mobile applications for iOS and Android."
        />
        <FlexSection
          imageUrl="/kk.jpg"
          heading="Enterprise Software"
          paragraph="We offer a range of top-notch services to meet your software needs."
        />
      </div>
    </div>
  );
}

export default Page;





