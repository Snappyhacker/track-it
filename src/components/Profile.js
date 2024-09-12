// File: /src/components/Profile.js
import React from 'react';

const UserProfile = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input type="text" className="w-full p-2 border rounded" defaultValue="John Doe" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border rounded" defaultValue="johndoe@example.com" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
