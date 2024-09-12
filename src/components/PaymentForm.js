// File: /src/components/PaymentForm.js
import React, { useState } from 'react';

const PaymentForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission logic here
    console.log('Processing payment with MPESA');
    console.log('Phone Number:', phoneNumber);
    console.log('Amount:', amount);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="phoneNumber" className="block text-lg font-medium mb-2">MPESA Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div>
        <label htmlFor="amount" className="block text-lg font-medium mb-2">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Pay with MPESA
      </button>
    </form>
  );
};

export default PaymentForm;
