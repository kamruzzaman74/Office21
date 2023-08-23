'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" bg-cyan-300 text-pink-400 ">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center text-xl font-boldui">
        <Image src="/aa.png" alt="my logo image" width={100} height={200}/>
        <span className="ml-2 font-extrabold">grow <span className="text-yellow-400">More</span>19</span>
        </Link>
        <button
          className="md:hidden text-black hover:text-red-800"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-4 mt-4 md:mt-0`}
        >
          <Link href="/Home"className="block md:inline-block py-2 px-4 md:px-0 text-center hover:text-yellow-400">
              Home
            
          </Link>
          <Link href="/About"className="block md:inline-block py-2 px-4 md:px-0 text-center hover:text-yellow-400">
              About
            
          </Link>

          <Link href="/Service"className="block md:inline-block py-2 px-4 md:px-0 text-center hover:text-yellow-400">
              Service
            
          </Link>
          <Link href="/Contact"className="block md:inline-block py-2 px-4 md:px-0 text-center hover:text-yellow-400">
              Contact
            
          </Link>
          <Link href="/Blog"className="block md:inline-block py-2 px-4 md:px-0 text-center hover:text-yellow-400">
              Blog
            
          </Link>
        



          
         
        </nav>
      </div>
    </header>
  );
};

export default Header;


