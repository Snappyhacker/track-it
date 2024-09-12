// File: /src/components/Checkout.js
import React, { useState } from 'react';
import PaymentForm from './PaymentForm';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('on-delivery');
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handlePaymentMethodChange = (e) => {
    const method = e.target.value;
    setPaymentMethod(method);
    setShowPaymentForm(method === 'online');
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Checkout</h1>

      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Select Payment Method</h2>
        
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="online"
              name="paymentMethod"
              value="online"
              checked={paymentMethod === 'online'}
              onChange={handlePaymentMethodChange}
              className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
            />
            <label htmlFor="online" className="text-lg font-medium text-gray-800">Online Payment (MPESA)</label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="on-delivery"
              name="paymentMethod"
              value="on-delivery"
              checked={paymentMethod === 'on-delivery'}
              onChange={handlePaymentMethodChange}
              className="mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400"
            />
            <label htmlFor="on-delivery" className="text-lg font-medium text-gray-800">Pay on Delivery</label>
          </div>
        </div>

        {showPaymentForm && <PaymentForm />}
      </div>
    </div>
  );
};

export default Checkout;
