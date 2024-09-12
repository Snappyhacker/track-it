// src/components/UserProfile.js
import React from 'react';

const UserProfile = () => {
  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6">User Profile</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">Name:</label>
          <input type="text" id="name" name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium">Email:</label>
          <input type="email" id="email" name="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label htmlFor="address" className="block text-lg font-medium">Address:</label>
          <input type="text" id="address" name="address" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
