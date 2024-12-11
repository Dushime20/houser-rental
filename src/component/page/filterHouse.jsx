import React, { useState } from 'react';

const FilterHouse = () => {
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    status: '',
    condition: '',
    rooms: ''
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = () => {
    // Handle the search logic here, e.g., make an API call with the filter parameters
    console.log(filters);
  };

  return (
    <div className=" flex items-center justify-center ">
      <div className="bg-white p-4 rounded-lg shadow-xl w-full max-w-5xl grid grid-cols-1 gap-4 lg:grid-cols-5 items-end">
        <div className="flex flex-col">
          <label htmlFor="location" className="text-blue-800 font-bold">Location</label>
          <select
            id="location"
            name="location"
            value={filters.location}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">All</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="text-blue-800 font-bold">Price</label>
          <select
            id="price"
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">All</option>
            {/* Add more options as needed */}
          </select>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="rooms" className="text-blue-800 font-bold">Rooms</label>
          <input
            id="rooms"
            type="text"
            name="rooms"
            placeholder="Any"
            value={filters.rooms}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="lg:col-span-5 flex ">
          <button
            onClick={handleSearch}
            className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 1114 0 7 7 0 01-14 0z" />
            </svg>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterHouse;
