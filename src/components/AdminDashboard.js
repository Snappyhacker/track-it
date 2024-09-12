// File: /src/components/AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Manage Users */}
        <div className="p-6 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
          <p className="mb-4">View, edit, or deactivate user accounts and view detailed profiles.</p>
          <Link to="/manage-users" className="text-blue-600 hover:underline">Manage Users</Link>
        </div>

        {/* Manage Products */}
        <div className="p-6 bg-gradient-to-r from-green-300 via-green-200 to-green-100 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Manage Products</h2>
          <p className="mb-4">View and edit all products listed on the platform.</p>
          <Link to="/manage-products" className="text-green-600 hover:underline">Manage Products</Link>
        </div>

        {/* Manage Orders */}
        <div className="p-6 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Manage Orders</h2>
          <p className="mb-4">Track and manage all orders placed on the platform.</p>
          <Link to="/manage-orders" className="text-yellow-600 hover:underline">Manage Orders</Link>
        </div>

        {/* View Sales Analytics */}
        <div className="p-6 bg-gradient-to-r from-red-300 via-red-200 to-red-100 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">View Sales Analytics</h2>
          <p className="mb-4">Analyze sales performance and trends with detailed reports.</p>
          <Link to="/sales-analytics" className="text-red-600 hover:underline">View Analytics</Link>
        </div>

        {/* Manage Categories */}
        <div className="p-6 bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Manage Categories</h2>
          <p className="mb-4">Add, edit, or delete product categories.</p>
          <Link to="/manage-categories" className="text-purple-600 hover:underline">Manage Categories</Link>
        </div>

        {/* Manage Shipping Options */}
        <div className="p-6 bg-gradient-to-r from-teal-300 via-teal-200 to-teal-100 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Manage Shipping Options</h2>
          <p className="mb-4">Configure shipping rates and methods.</p>
          <Link to="/manage-shipping" className="text-teal-600 hover:underline">Manage Shipping</Link>
        </div>

        {/* Handle Disputes and Complaints */}
        <div className="p-6 bg-gradient-to-r from-indigo-300 via-indigo-200 to-indigo-100 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Handle Disputes & Complaints</h2>
          <p className="mb-4">Review and resolve disputes or complaints from users.</p>
          <Link to="/handle-disputes" className="text-indigo-600 hover:underline">Handle Disputes</Link>
        </div>

        {/* Manage Promotions and Discounts */}
        <div className="p-6 bg-gradient-to-r from-orange-300 via-orange-200 to-orange-100 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Manage Promotions & Discounts</h2>
          <p className="mb-4">Create and manage promotional campaigns and discount codes.</p>
          <Link to="/manage-promotions" className="text-orange-600 hover:underline">Manage Promotions</Link>
        </div>

        {/* View and Manage Feedback */}
        <div className="p-6 bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-100 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">View & Manage Feedback</h2>
          <p className="mb-4">Monitor and respond to feedback and ratings given to sellers and products.</p>
          <Link to="/manage-feedback" className="text-cyan-600 hover:underline">View Feedback</Link>
        </div>

        {/* Generate Reports */}
        <div className="p-6 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Generate Reports</h2>
          <p className="mb-4">Generate various reports related to users, orders, sales, and more.</p>
          <Link to="/generate-reports" className="text-gray-600 hover:underline">Generate Reports</Link>
        </div>

        {/* Audit Log */}
        <div className="p-6 bg-gradient-to-r from-teal-300 via-teal-200 to-teal-100 rounded-lg shadow-lg hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Audit Log</h2>
          <p className="mb-4">View logs of significant actions taken on the platform.</p>
          <Link to="/audit-log" className="text-teal-600 hover:underline">View Audit Log</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
