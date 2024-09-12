// src/components/TrackLocation.js
import React, { useState, useEffect } from 'react';

const TrackLocation = () => {
  const [buyerLocation, setBuyerLocation] = useState({ lat: null, lng: null });
  const [trackingStatus, setTrackingStatus] = useState('Waiting for buyer location...');

  useEffect(() => {
    // Mock API call to get buyer's live location
    const fetchBuyerLocation = () => {
      // Simulate buyer location update
      setTimeout(() => {
        setBuyerLocation({ lat: '-1.2921', lng: '36.8219' }); // Nairobi coordinates as example
        setTrackingStatus('Tracking live location...');
      }, 2000);
    };

    fetchBuyerLocation();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Track Buyer's Location</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Live Location</h2>
        <p>{trackingStatus}</p>
        {buyerLocation.lat && buyerLocation.lng ? (
          <p className="mt-4">
            <strong>Latitude:</strong> {buyerLocation.lat} <br />
            <strong>Longitude:</strong> {buyerLocation.lng}
          </p>
        ) : (
          <p>No live location available yet.</p>
        )}
      </div>
    </div>
  );
};

export default TrackLocation;
