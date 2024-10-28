"use client"
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src="/techmonkeys2.png" // Adjust the path to your logo image
              alt="Tech Monkeys Logo"
              width={200}
              height={200}
              className="h-16 w-auto"
            />
            
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 uppercase tracking-wide text-lg">
                      <a href="#about" className="relative group font-thin">
                        <span className="text-gray-300 transition-colors duration-300 group-hover:text-yellow-300">
                          About Us
                        </span>
                        <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-yellow-300 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                      </a>

                      <a href="#contact" className="relative group font-thin">
                        <span className="text-gray-300 transition-colors duration-300 group-hover:text-yellow-300">
                          Contact
                        </span>
                        <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-yellow-300 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                      </a>

                      <a href="#services" className="relative group font-thin">
                        <span className="text-gray-300 transition-colors duration-300 group-hover:text-yellow-300">
                          Services
                        </span>
                        <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-yellow-300 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                      </a>
            </div>





          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-gray-300 uppercase">
            <a href="#about" className="block hover:text-white">
              About Us
            </a>
            <a href="#contact" className="block hover:text-white">
              Contact
            </a>
            <a href="#services" className="block hover:text-white">
              Services
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
