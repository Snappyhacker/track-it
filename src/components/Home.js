// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center p-8">
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-12">Welcome to Snappy</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Seller's Dashboard</h2>
            <p className="text-gray-700 mb-4">Manage your products, view orders, and communicate with buyers.</p>
            <Link to="/seller-dashboard">
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Go to Seller Dashboard
              </button>
            </Link>
          </div>
          <div className="p-6 bg-green-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Buyer's Dashboard</h2>
            <p className="text-gray-700 mb-4">Browse products, manage orders, and communicate with sellers.</p>
            <Link to="/buyer-dashboard">
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
                Go to Buyer Dashboard
              </button>
            </Link>
          </div>
          <div className="p-6 bg-red-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Admin Dashboard</h2>
            <p className="text-gray-700 mb-4">Manage users, products, and oversee the entire platform.</p>
            <Link to="/admin-dashboard">
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300">
                Go to Admin Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
