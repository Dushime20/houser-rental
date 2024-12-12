import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ApiService from '../../config/ApiService';


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleUsernameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async(e) => {
    
    e.preventDefault();
    // Handle the signup logic here, e.g., make an API call to register the user
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setLoading(true); 
    try {
      const formData = { email, password,name,phone };
      console.log(formData)
     
      const response = await ApiService.registerUser(formData);
      alert("user registered successfully")
      console.log('signup successful:', response);
      navigate("/login")
      setLoading(false);
      // Handle successful login, e.g., redirect to a different page or store token
    } catch (error) {
      //setError('Failed to register');
      console.log("error",error.message)
      setLoading(false);
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-blue-800 mb-2 font-bold">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleUsernameChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-blue-800 mb-2 font-bold">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-blue-800 mb-2 font-bold">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-blue-800 mb-2 font-bold">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-blue-800 mb-2 font-bold">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className='py-3 text-blue-500'>
         
         <Link to={'/login'}><p>Not have account login</p></Link>
        </div>
          <div className="flex justify-end">
         
          <button
            type="submit"
            className={`bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
