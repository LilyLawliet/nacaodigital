// Navbar.jsx
import React from "react";
import Logo from "../assets/nacao.png";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="cursor-pointer">
          <img
            src={Logo}
            alt="Agency Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-medium text-gray-300">
          <li className="hover:text-white transition duration-300 cursor-pointer">Solutions</li>
          <li className="hover:text-white transition duration-300 cursor-pointer">Case Studies</li>
          <li className="hover:text-white transition duration-300 cursor-pointer">Insights</li>
          <li className="hover:text-white transition duration-300 cursor-pointer">Contact</li>
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-purple-900/50 transition duration-300">
            Get a Growth Plan
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button className="text-gray-300 focus:outline-none">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
