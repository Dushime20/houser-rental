import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-8">About Us</h2>
        
        <p className="text-lg text-gray-700 mb-6">
          Welcome to RentalHub! We are a passionate team of innovators working to transform the rental market in Rwanda. Our platform was built with the aim to make property rental easier, faster, and more transparent for both landlords and tenants. By leveraging cutting-edge technology, we bring landlords and tenants together without the need for intermediaries.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Our team consists of experienced professionals from various backgrounds including software development, real estate, and customer service. Together, we are focused on creating a seamless and user-friendly experience for everyone in Rwanda’s rental market.
        </p>

        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h3>
        <p className="text-lg text-gray-700 mb-6">
          At RentalHub, our mission is to revolutionize the way people rent properties in Rwanda. We aim to provide a secure, efficient, and accessible platform that bridges the gap between landlords and tenants, offering features that enhance communication, trust, and convenience. We are committed to ensuring a seamless and transparent rental experience for all.
        </p>

        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Vision</h3>
        <p className="text-lg text-gray-700 mb-6">
          We envision a future where every Rwandan can access rental properties easily, without unnecessary barriers. By creating a transparent and fair rental market, we aim to empower individuals and families to find their perfect homes with ease. RentalHub is not just a platform; it’s a movement to make the rental market more inclusive and accessible for everyone.
        </p>

        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Meet the Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              className="mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-700">John Doe</h4>
            <p className="text-sm text-gray-500">CEO & Founder</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
              className="mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-700">Jane Smith</h4>
            <p className="text-sm text-gray-500">COO</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
              className="mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-700">Alice Johnson</h4>
            <p className="text-sm text-gray-500">Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
