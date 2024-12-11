import React from 'react';
import { Link } from 'react-router-dom';
import FilterHouse from './filterHouse';

const LandingPage = () => {
  return (
    <div className="h-screen flex justify-center items-center  text-blue-800">
      <div className=" max-w-3xl mx-auto">
        <div className="flex mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-16 h-16 text-blue-800"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9.75V21a1.5 1.5 0 001.5 1.5h4.5a1.5 1.5 0 001.5-1.5V14.25a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5V21a1.5 1.5 0 001.5 1.5h4.5A1.5 1.5 0 0021 21V9.75l-9-6.75-9 6.75z" />
          </svg>
        </div>
        <h1 className="text-5xl font-bold mb-6">Welcome to RentalHub</h1>
        <p className="text-lg mb-6">Your go-to platform for renting properties across Rwanda. Find your perfect home or property with ease and confidence.</p>
        <div className="flex  space-x-6">
          <Link
            to="/login"
            className="text-white bg-blue-800 py-2 px-6 rounded-full text-lg hover:bg-blue-400 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default LandingPage;
