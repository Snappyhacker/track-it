// File: /src/components/Returns.js
import React, { useState } from 'react';

const Returns = () => {
  const [returnRequests, setReturnRequests] = useState([
    { id: 1, product: 'Smartphone', status: 'Pending', date: '2023-09-07' },
  ]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Return & Refunds</h1>
      <div className="grid grid-cols-1 gap-4">
        {returnRequests.length > 0 ? (
          returnRequests.map(request => (
            <div key={request.id} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">Product: {request.product}</h2>
              <p>Status: {request.status}</p>
              <p>Requested on: {request.date}</p>
            </div>
          ))
        ) : (
          <p>No return requests found.</p>
        )}
      </div>
    </div>
  );
};

export default Returns;

