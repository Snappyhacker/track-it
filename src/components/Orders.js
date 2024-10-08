// File: /src/components/Orders.js
import React, { useState, useEffect } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('authToken');
      try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/orders/my_orders/', {
          headers: {
            'Authorization': `Token ${token}`,
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        
        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <div className="text-center py-8">Loading orders...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-10">Your Orders</h1>
      <div className="grid grid-cols-1 gap-6">
        {orders.length > 0 ? (
          orders.map(order => (
            <div key={order.id} className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl">
              <h2 className="text-xl font-semibold mb-2">Order #{order.id}</h2>
              <p className="text-gray-600 mb-2">Status: {order.status}</p>
              <p className="text-gray-600 mb-2">Total: ${parseFloat(order.total_price).toFixed(2)}</p>
              <p className="text-gray-600 mb-4">Ordered on: {new Date(order.created_at).toLocaleDateString()}</p>
              <h3 className="text-lg font-semibold mb-2">Items:</h3>
              <ul className="list-disc pl-5">
                {order.items.map(item => (
                  <li key={item.id} className="mb-2">
                    {item.product.name} - Quantity: {item.quantity}, Price: ${parseFloat(item.price).toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
