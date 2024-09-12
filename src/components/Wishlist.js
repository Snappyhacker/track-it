// File: /src/components/Wishlist.js
import React, { useState } from 'react';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    { id: 1, product: 'Gaming Laptop', price: 1500 },
    { id: 2, product: '4K Monitor', price: 400 },
  ]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
      <div className="grid grid-cols-1 gap-4">
        {wishlist.length > 0 ? (
          wishlist.map(item => (
            <div key={item.id} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{item.product}</h2>
              <p>Price: ${item.price}</p>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
