import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await fetch('http://127.0.0.1:8000/api/v1/orders/', {
          headers: {
            'Authorization': `Token ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setOrders(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (isLoading) {
    return <div className="text-center py-10">Loading orders...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Your Orders</h2>
      {orders.length === 0 ? (
        <p className="text-center text-gray-500">You haven't placed any orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Order #{order.id}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  order.status === 'completed' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
              <p className="text-gray-600 mb-2">
                Date: {format(new Date(order.created_at), 'MMMM d, yyyy HH:mm')}
              </p>
              <p className="text-gray-600 mb-4">Total Price: ${parseFloat(order.total_price).toFixed(2)}</p>
              {order.items.length > 0 ? (
                <div>
                  <h4 className="font-semibold mb-2">Items:</h4>
                  <ul className="list-disc list-inside">
                    {order.items.map((item, index) => (
                      <li key={index} className="text-gray-600">
                        {item.product_name} - Quantity: {item.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-gray-500 italic">No items in this order</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewOrders;
