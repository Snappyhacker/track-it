// src/context/NotificationContext.js
import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // Add a new notification
  const addNotification = (message) => {
    const newNotification = { id: Date.now(), message };
    setNotifications([...notifications, newNotification]);

    // Automatically remove the notification after 3 seconds
    setTimeout(() => {
      removeNotification(newNotification.id);
    }, 3000);
  };

  // Remove a notification by id
  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      {/* Render the notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.map((notification) => (
          <div key={notification.id} className="bg-blue-500 text-white p-3 rounded shadow">
            {notification.message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

// Custom hook to use notifications in any component
export const useNotification = () => {
  return useContext(NotificationContext);
};
