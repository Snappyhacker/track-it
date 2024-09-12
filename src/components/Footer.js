// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      <div>
        <p>© 2023 Your Website. All Rights Reserved.</p>
        <div>
          <a href="/privacy-policy" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>
          {" | "}
          <a href="/terms-and-conditions" className="text-blue-400 hover:underline">
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
