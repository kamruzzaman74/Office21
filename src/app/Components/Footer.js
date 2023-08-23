import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-pink-500 py-8">
      <div className="container mx-auto text-center">
        <p className="text-3xl md:text-4xl font-extrabold text-white mb-2">🌸grow <span className="text-yellow-300">More</span>19. All rights reserved. 🌸</p>
        <p className="text-lg md:text-xl font-semibold text-pink-100">💌 Contact us: <a href="mailto:19growmore@gmail.com" className="underline">19growmore@gmail.com</a> | <a href="tel:01786400994" className="underline">01786400994 📞</a></p>
        <div className="flex justify-center mt-4">
          <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-300 mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.75 16.75l1.5-6H9.5M15.25 16.75l-1.5-6H10M3 21l1.116-4.464M21 21l-1.116-4.464M4 8.25h4M16 8.25h4M6.257 3.757a2.5 2.5 0 103.536 3.535 2.5 2.5 0 00-3.536-3.535z" />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-300 mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 10H21a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V12a2 2 0 012-2h6.172M10 4H5a2 2 0 00-2 2v13a2 2 0 002 2h5m4 0h6m-6 0V4m6 0v6" />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-300 mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.31-3.696a4.5 4.5 0 00-6.238 0M12 8v.01M8.55 19.3a7.5 7.5 0 0011.9-7.4H8.55v7.4z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
