// src/components/SellerDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const SellerDashboard = () => {
  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-gray-100 via-white to-gray-200">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Seller's Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Manage Products */}
        <div className="p-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Manage Products</h2>
          <p className="mb-4 text-gray-600">Add, edit, or delete products in your catalog.</p>
          <Link to="/manage-products">
            <button className="text-blue-600 hover:underline">Manage Products</button>
          </Link>
        </div>

        {/* View Orders */}
        <div className="p-6 bg-gradient-to-r from-green-300 via-yellow-300 to-red-300 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">View Orders</h2>
          <p className="mb-4 text-gray-600">Track and manage all orders placed by buyers.</p>
          <Link to="/view-orders">
            <button className="text-blue-600 hover:underline">View Orders</button>
          </Link>
        </div>

        {/* Track Buyer Location */}
        <div className="p-6 bg-gradient-to-r from-purple-300 via-blue-300 to-green-300 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Track Buyer Location</h2>
          <p className="mb-4 text-gray-600">Track the real-time location of buyers who have placed an order.</p>
          <Link to="/track-location">
            <button className="text-blue-600 hover:underline">Track Location</button>
          </Link>
        </div>

        {/* Communicate with Buyers */}
        <div className="p-6 bg-gradient-to-r from-teal-300 via-indigo-300 to-yellow-300 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Communicate with Buyers</h2>
          <p className="mb-4 text-gray-600">Send and receive messages to/from buyers.</p>
          <Link to="/messages">
            <button className="text-blue-600 hover:underline">Go to Messages</button>
          </Link>
        </div>

        {/* Manage Inventory */}
        <div className="p-6 bg-gradient-to-r from-orange-300 via-red-300 to-purple-300 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Manage Inventory</h2>
          <p className="mb-4 text-gray-600">Track and update inventory levels for your products.</p>
          <Link to="/inventory">
            <button className="text-blue-600 hover:underline">Manage Inventory</button>
          </Link>
        </div>

        {/* View Sales Analytics */}
        <div className="p-6 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">View Sales Analytics</h2>
          <p className="mb-4 text-gray-600">Analyze sales performance and trends.</p>
          <Link to="/sales-analytics">
            <button className="text-blue-600 hover:underline">View Analytics</button>
          </Link>
        </div>

        {/* Manage Shipping */}
        <div className="p-6 bg-gradient-to-r from-gray-300 via-blue-300 to-green-300 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Manage Shipping</h2>
          <p className="mb-4 text-gray-600">Set shipping rates and manage shipping details.</p>
          <Link to="/shipping">
            <button className="text-blue-600 hover:underline">Manage Shipping</button>
          </Link>
        </div>

        {/* Manage Returns and Refunds */}
        <div className="p-6 bg-gradient-to-r from-yellow-300 via-green-300 to-blue-300 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Manage Returns & Refunds</h2>
          <p className="mb-4 text-gray-600">Process returns and issue refunds for products.</p>
          <Link to="/returns">
            <button className="text-blue-600 hover:underline">Manage Returns</button>
          </Link>
        </div>

        {/* Promotions and Discounts */}
        <div className="p-6 bg-gradient-to-r from-indigo-300 via-teal-300 to-yellow-300 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Promotions & Discounts</h2>
          <p className="mb-4 text-gray-600">Create and manage promotions or discount codes.</p>
          <Link to="/promotions">
            <button className="text-blue-600 hover:underline">Manage Promotions</button>
          </Link>
        </div>

        {/* Review Feedback and Ratings */}
        <div className="p-6 bg-gradient-to-r from-red-300 via-orange-300 to-yellow-300 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Review Feedback & Ratings</h2>
          <p className="mb-4 text-gray-600">View and respond to buyer feedback and ratings.</p>
          <Link to="/feedback">
            <button className="text-blue-600 hover:underline">View Feedback</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
