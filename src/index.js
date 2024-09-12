import React from 'react';
import ReactDOM from 'react-dom/client'; // Change import from 'react-dom'
import './index.css';
import App from './App';
import { UserProvider } from './context/UserContext'; // Import UserProvider

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);

