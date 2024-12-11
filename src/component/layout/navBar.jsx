import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-xl border-b-4 top-0 sticky">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-blue-800 text-2xl font-semibold">
          <Link to="/">RentalHub</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-blue-800 hover:text-blue-600">Home</Link>
          <Link to="/properties" className="text-blue-800 hover:text-blue-600">Properties</Link>
          <Link to="/about" className="text-blue-800 hover:text-blue-600">About</Link>
          <Link to="/contact" className="text-blue-800 hover:text-blue-600">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link to="/" className="block text-blue-800 hover:text-blue-600">Home</Link>
          <Link to="/properties" className="block text-blue-800 hover:text-blue-600">Properties</Link>
          <Link to="/about" className="block text-blue-800 hover:text-blue-600">About</Link>
          <Link to="/contact" className="block text-blue-800 hover:text-blue-600">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
