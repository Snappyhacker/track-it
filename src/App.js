// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // Assuming Footer is already defined
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Orders from './components/Orders';
import UserProfile from './components/UserProfile';
import SellerDashboard from './components/SellerDashboard';
import BuyerDashboard from './components/BuyerDashboard';
import AdminDashboard from './components/AdminDashboard';
import Messages from './components/Messages';
import ManageProducts from './components/ManageProducts'; // Component for managing products
import TrackLocation from './components/TrackLocation'; // Component for tracking buyer's location
import ManageInventory from './components/ManageInventory'; // Component for managing inventory
import ViewOrders from './components/ViewOrders'; // Component for viewing orders
import SalesAnalytics from './components/SalesAnalytics'; // Component for viewing sales analytics
import ManageShipping from './components/ManageShipping'; // Component for managing shipping
import ReturnsRefunds from './components/ReturnsRefunds'; // Component for managing returns and refunds
import Promotions from './components/Promotions'; // Component for promotions and discounts
import Feedback from './components/Feedback'; // Component for feedback and ratings
import SignUp from './components/SignUp'; // Sign Up page
import Login from './components/Login'; // Login page

function App() {
  return (
    <Router>
      <Header /> {/* Header with navigation and logout button */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<UserProfile />} />

        {/* Authentication Routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard Routes */}
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* Specific feature routes for dashboard */}
        <Route path="/messages" element={<Messages />} />
        <Route path="/manage-products" element={<ManageProducts />} />
        <Route path="/track-location" element={<TrackLocation />} />
        <Route path="/inventory" element={<ManageInventory />} />
        <Route path="/view-orders" element={<ViewOrders />} />
        <Route path="/sales-analytics" element={<SalesAnalytics />} />
        <Route path="/shipping" element={<ManageShipping />} />
        <Route path="/returns" element={<ReturnsRefunds />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Footer /> {/* Footer */}
    </Router>
  );
}

export default App;
