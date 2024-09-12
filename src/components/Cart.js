// File: /src/components/Cart.js
import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, product: 'Laptop', price: 1200, quantity: 1 },
    { id: 2, product: 'Headphones', price: 200, quantity: 2 },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(cartItems.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item)));
  };

  const handleRemoveItem = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-10">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl mb-4">
              <h2 className="text-xl font-semibold mb-2">{item.product}</h2>
              <p className="text-gray-600 mb-2">Price: ${item.price}</p>
              <div className="flex items-center mb-2">
                <p className="text-gray-600 mr-4">Quantity: </p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  className="w-16 border rounded p-1"
                />
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Remove
              </button>
            </div>
          ))}
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl mt-6">
            <h2 className="text-xl font-semibold mb-2">Total: ${total}</h2>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
