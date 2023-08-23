import React from 'react';

function ContactPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Get in Touch</h1>
        <p className="text-gray-700 text-center mb-8">
          We'd love to hear from you! Reach out using the contact form or visit our office.
        </p>

        <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contact Form</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2 font-semibold">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-semibold">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:bg-white"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 mb-2 font-semibold">Message</label>
              <textarea
                className="w-full h-32 px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:bg-white"
              ></textarea>
            </div>
            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700 font-semibold transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Visit Us</h2>
          <div className="flex items-center">
            <svg
              className="w-8 h-8 text-gray-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 20h10a4 4 0 004-4V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a4 4 0 004 4z"
              ></path>
            </svg>
            <address className="text-gray-700">
              <p className="font-semibold">Address:</p>
              <p>Block D, Road 5</p>
              <p>City: Dhaka, Basundhara</p>
              <p>Phone: 0130-8230872</p>
              <p>Email: 19growmore@gmail.com</p>
            </address>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactPage;




