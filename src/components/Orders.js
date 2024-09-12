// File: /src/components/Orders.js
import React, { useState, useEffect } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching orders from an API
    const mockOrders = [
      { id: 1, product: 'Laptop', status: 'Shipped', total: '$1200', date: '2023-09-01' },
      { id: 2, product: 'Headphones', status: 'Delivered', total: '$200', date: '2023-09-03' },
      { id: 3, product: 'Smartphone', status: 'Processing', total: '$800', date: '2023-09-05' },
    ];
    setOrders(mockOrders);
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-10">Your Orders</h1>
      <div className="grid grid-cols-1 gap-6">
        {orders.length > 0 ? (
          orders.map(order => (
            <div key={order.id} className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl">
              <h2 className="text-xl font-semibold mb-2">Product: {order.product}</h2>
              <p className="text-gray-600 mb-2">Status: {order.status}</p>
              <p className="text-gray-600 mb-2">Total: {order.total}</p>
              <p className="text-gray-600">Ordered on: {order.date}</p>
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
