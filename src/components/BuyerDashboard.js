// File: /src/components/BuyerDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const BuyerDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-8">
      <div className="bg-white bg-opacity-30 p-10 rounded-lg shadow-lg max-w-6xl w-full">
        <h1 className="text-5xl font-extrabold text-white text-center mb-12 tracking-wide">Buyer's Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Browse Products</h2>
            <p className="text-gray-700 mb-4">Explore a variety of products and make a purchase that suits your needs.</p>
            <Link to="/products" className="text-indigo-600 hover:underline font-semibold">Go to Products</Link>
          </div>

          <div className="p-8 bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Manage Orders</h2>
            <p className="text-gray-700 mb-4">Track your orders, view details, and manage returns.</p>
            <Link to="/orders" className="text-purple-600 hover:underline font-semibold">View Your Orders</Link>
          </div>

          <div className="p-8 bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Cart</h2>
            <p className="text-gray-700 mb-4">Check the items in your cart and proceed to checkout.</p>
            <Link to="/cart" className="text-pink-600 hover:underline font-semibold">Go to Cart</Link>
          </div>

          <div className="p-8 bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold text-green-600 mb-4">User Profile</h2>
            <p className="text-gray-700 mb-4">Update your profile and manage payment methods.</p>
            <Link to="/profile" className="text-green-600 hover:underline font-semibold">Go to Profile</Link>
          </div>

          <div className="p-8 bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">Wishlist</h2>
            <p className="text-gray-700 mb-4">View and manage your wishlist.</p>
            <Link to="/wishlist" className="text-yellow-600 hover:underline font-semibold">Go to Wishlist</Link>
          </div>

          <div className="p-8 bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Returns & Refunds</h2>
            <p className="text-gray-700 mb-4">Request returns or refunds for your orders.</p>
            <Link to="/returns" className="text-red-600 hover:underline font-semibold">Manage Returns</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
