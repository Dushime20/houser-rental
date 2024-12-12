import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ApiService from '../../config/ApiService';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = { email, password };
      const response = await ApiService.loginUser(formData);
      console.log('Login successful:', response);
      setLoading(true)
      navigate("/")
      localStorage.setItem('token', response.token);
     alert("logged in successfully")
    } catch (error) {
      //setError('Failed to login. Please check your email and password.');
      console.log("error",error.message)
      setLoading(false)
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
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
         <div className='flex justify-between py-3 text-blue-500'>
          <Link> <p>forget password?</p></Link>
          <Link to={'/signup'}><p>Not have account signup</p></Link>
         </div>
          <div className="flex justify-end">
          <button
            type="submit"
            className={`bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Login...' : 'Login'}
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
