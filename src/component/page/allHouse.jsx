import React from 'react';

const allHouse = () => {
  const houses = [
    {
      id: 1,
      location: 'Kigali, Rwanda',
      price: '$150,000',
      rooms: 3,
      type: 'Apartment',
      status: 'Available',
      condition: 'New',
      imageUrl: 'https://vibe.rw/wp-content/uploads/2024/04/24-04-15-house-for-rent-kibagabaga-kigalirwanda-min-1170x761.jpg'
    },
    {
      id: 2,
      location: 'Huye, Rwanda',
      price: '$120,000',
      rooms: 2,
      type: 'Condo',
      status: 'Available',
      condition: 'Used',
      imageUrl: 'https://vibe.rw/wp-content/uploads/2024/04/24-04-17-house-for-rent-kibagabaga-kigalirwanda-41-min-1170x750.jpg'
    },
    {
      id: 3,
      location: 'Musanze, Rwanda',
      price: '$100,000',
      rooms: 4,
      type: 'House',
      status: 'Sold',
      condition: 'New',
      imageUrl: 'https://vibe.rw/wp-content/uploads/2022/01/22-01-13-house-for-rent-Rebero-kigali-rwanda-37-1170x751.jpg'
    },
    {
      id: 4,
      location: 'Rubavu, Rwanda',
      price: '$180,000',
      rooms: 3,
      type: 'Apartment',
      status: 'Available',
      condition: 'New',
      imageUrl: 'https://vibe.rw/wp-content/uploads/2024/04/24-03-26-house-for-rent-kibagabaga-kigalirwanda-rwanda-118-min-1170x785.jpg'
    },
    {
      id: 5,
      location: 'Rusizi, Rwanda',
      price: '$160,000',
      rooms: 5,
      type: 'Villa',
      status: 'Available',
      condition: 'New',
      imageUrl: 'https://vibe.rw/wp-content/uploads/2022/04/22-03-26-house-for-rent-gisozi-kigalirwanda-14-1170x751.jpg'
    },
    {
      id: 6,
      location: 'Rwamagana, Rwanda',
      price: '$110,000',
      rooms: 2,
      type: 'Bungalow',
      status: 'Available',
      condition: 'New',
      imageUrl: 'https://vibe.rw/wp-content/uploads/2022/10/22-10-26-house-for-rent-nyamirambo-kigalirwanda-48-1170x750.jpg'
    }
  ];

  return (
   <div className='min-h-screen bg-gray-100 p-6  '>
    <h1 className='text-blue-800 underline text-2xl mb-4'>All House</h1>
     <div className="flex items-center justify-center">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full max-w-7xl">
        {houses.map(house => (
          <div key={house.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={house.imageUrl} alt={`House in ${house.location}`} className="rounded-t-lg w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-bold mb-2">{house.location}</h2>
            <p className="text-gray-700 mb-1"><strong>Price:</strong> {house.price}</p>
            <p className="text-gray-700 mb-1"><strong>Rooms:</strong> {house.rooms}</p>
            <p className="text-gray-700 mb-1"><strong>Type:</strong> {house.type}</p>
            <p className="text-gray-700 mb-1"><strong>Status:</strong> {house.status}</p>
            <p className="text-gray-700 mb-1"><strong>Condition:</strong> {house.condition}</p>
            <button className="mt-4 bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default allHouse;
