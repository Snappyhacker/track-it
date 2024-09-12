// src/components/Header.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Mock authentication state

  const handleLogout = () => {
    setIsAuthenticated(false); // Set state to false on logout
    navigate('/login'); // Redirect to login page
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">Snappy</Link>
        </div>
        <nav className="space-x-4">
          <Link to="/products" className="hover:text-blue-400">Products</Link>
          <Link to="/cart" className="hover:text-blue-400">Cart</Link>
          <Link to="/orders" className="hover:text-blue-400">Orders</Link>
          <Link to="/profile" className="hover:text-blue-400">Profile</Link>
          <Link to="/checkout" className="hover:text-blue-300">Checkout</Link>

          <Link to="/seller-dashboard" className="hover:text-yellow-400">Seller Dashboard</Link>
          <Link to="/buyer-dashboard" className="hover:text-green-400">Buyer Dashboard</Link>
          <Link to="/admin-dashboard" className="hover:text-red-400">Admin Dashboard</Link>

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="hover:text-blue-400">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
