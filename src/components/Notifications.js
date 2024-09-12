// src/components/Notification.js
import React from 'react';

const Notification = ({ message }) => {
  return (
    <div className="bg-blue-500 text-white p-3 rounded shadow">
      {message}
    </div>
  );
};

export default Notification;
