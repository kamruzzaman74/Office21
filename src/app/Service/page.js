import React from 'react';
import FlexSection from '../PictureShow/FlexSection';

const Page = () => {
  return (
    <div className="py-8 bg-gray-100">
      <div className="text-center mb-10">
        <div className="inline-block p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Explore Our Services
          </h1>
        </div>
        <p className="text-gray-600 mt-3 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-lg md:text-xl font-semibold p-4 rounded-lg">
          Discover a Wide Range of Solutions We Offer
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
        <FlexSection
          imageUrl="/t.jpg"
          heading="AI Solutions"
          paragraph="Leverage the power of Artificial Intelligence to enhance efficiency and decision-making."
        />
       
        <FlexSection
          imageUrl="/k.jpg"
          heading="Digital Marketing"
          paragraph="Reach your target audience effectively with strategic and results-driven digital marketing campaigns."
        />
        <FlexSection
          imageUrl="/iit.png"
          heading="ERP Solutions"
          paragraph="Streamline and automate your business processes with integrated Enterprise Resource Planning solutions."
        />
      </div>
    </div>
  );
}

export default Page;




