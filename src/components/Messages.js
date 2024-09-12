// src/components/Messages.js
import React, { useState } from 'react';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'Seller' }]);
      setInput('');
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Messages</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <div className="h-64 overflow-y-auto bg-gray-100 p-4 rounded-md mb-4">
          {messages.map((message, index) => (
            <div key={index} className={`mb-2 ${message.sender === 'Seller' ? 'text-right' : ''}`}>
              <span className="block text-sm text-gray-600">{message.sender}</span>
              <p className="bg-blue-100 inline-block rounded-lg p-2">{message.text}</p>
            </div>
          ))}
        </div>

        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border rounded-l-lg p-2 w-full"
            placeholder="Type a message..."
          />
          <button onClick={handleSend} className="bg-blue-600 text-white p-2 rounded-r-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
