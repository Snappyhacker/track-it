// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Mock signup logic
    if (email && password) {
      localStorage.setItem('auth', true); // Save to local storage to mimic logged-in state
      navigate('/seller-dashboard'); // Redirect after signup
    } else {
      alert('Please provide valid details');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSignup} className="bg-gray-200 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-400 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-400 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
