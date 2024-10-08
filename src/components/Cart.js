import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('http://127.0.0.1:8000/api/v1/carts/my_cart/', {
        headers: {
          'Authorization': `Token ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch cart');
      }
      const data = await response.json();
      setCart(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleQuantityChange = async (productId, change) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('http://127.0.0.1:8000/api/v1/carts/add_item/', {
        method: 'POST',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: productId, quantity: change }),
      });
      if (!response.ok) {
        throw new Error('Failed to update item quantity');
      }
      const updatedCart = await response.json();
      setCart(updatedCart);
    } catch (err) {
      console.error('Error updating item quantity:', err);
      alert('Failed to update item quantity. Please try again.');
    }
  };

  const handleRemoveItem = async (productId) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('http://127.0.0.1:8000/api/v1/carts/remove_item/', {
        method: 'POST',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: productId }),
      });
      if (!response.ok) {
        throw new Error('Failed to remove item from cart');
      }
      const updatedCart = await response.json();
      setCart(updatedCart);
    } catch (err) {
      console.error('Error removing item from cart:', err);
      alert('Failed to remove item from cart. Please try again.');
    }
  };

  const handleCheckout = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('http://127.0.0.1:8000/api/v1/orders/', {
        method: 'POST',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to create order');
      }
      // Assuming the order was created successfully
      alert('Order created successfully!');
      // Redirect to the orders page
      navigate('/orders');
    } catch (err) {
      console.error('Error creating order:', err);
      alert('Failed to create order. Please try again.');
    }
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading cart...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-10">Your Cart</h1>
      {cart && cart.items.length > 0 ? (
        <div>
          {cart.items.map(item => (
            <div key={item.id} className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl mb-4">
              <h2 className="text-xl font-semibold mb-2">{item.product.name}</h2>
              <p className="text-gray-600 mb-2">Price: ${parseFloat(item.product.price).toFixed(2)}</p>
              <div className="flex items-center mb-2">
                <p className="text-gray-600 mr-4">Quantity: {item.quantity}</p>
                <button
                  onClick={() => handleQuantityChange(item.product.id, 1)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600"
                >
                  +
                </button>
                <button
                  onClick={() => handleQuantityChange(item.product.id, -1)}
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
              </div>
              <button
                onClick={() => handleRemoveItem(item.product.id)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Remove
              </button>
            </div>
          ))}
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl mt-6">
            <h2 className="text-xl font-semibold mb-2">Total: ${cart.total_price.toFixed(2)}</h2>
            <button 
              onClick={handleCheckout}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
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
