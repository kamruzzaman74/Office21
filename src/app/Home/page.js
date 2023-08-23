import React from 'react';
import Service from '../Service/page';
import Image from 'next/image';
import WorkSection from '../Components/WorkSection';

function Page() {
  return (
    <div className="p-8 m-4 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-semibold mb-4 text-sky-300 text-center">
        Build an Online Platform for Your Business & Start-up.
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <p className="mb-6 md:mb-0 md:mr-6 text-gray-700 text-center md:text-left">
          growMore19 is a software development company that designs and develops custom software applications, frameworks, and tools to solve problems and achieve specific outcomes. Our expertise includes application software, system infrastructure software, software-as-a-service (SaaS), operating systems, databases, and analytics software.
        </p>
        <div className="md:w-1/2 flex-shrink-0">
          <Image src="/rs.jpg" alt="image" width={500} height={500} />
        </div>
      </div>

      <div className="mt-8 border-t border-gray-300 pt-4">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b-2 border-gray-800 pb-2">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside text-gray-700 pl-4">
          <li className="mb-2">
            <span className="rounded-full bg-blue-200 text-blue-800 px-2 py-1 mr-2">
              Experienced team of developers
            </span>
          </li>
          <li className="mb-2">
            <span className="rounded-full bg-green-200 text-green-800 px-2 py-1 mr-2">
              High-quality solutions
            </span>
          </li>
          <li className="mb-2">
            <span className="rounded-full bg-yellow-200 text-yellow-800 px-2 py-1 mr-2">
              Customized software development
            </span>
          </li>
          <li className="mb-2">
            <span className="rounded-full bg-purple-200 text-purple-800 px-2 py-1 mr-2">
              Quick turnaround time
            </span>
          </li>
        </ul>
      </div>
      
      <Service />
      <WorkSection />

      {/* Beautifully designed section */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-16 text-center rounded-lg mt-8">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Turn Your Ideas into Reality?
        </h2>
        <p className="text-lg mb-4">
          Let's collaborate and create innovative software solutions that propel your business forward.
        </p>
        <a
          href="/contact"
          className="bg-white text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-6 rounded-full font-semibold transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}

export default Page;
