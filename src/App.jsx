import React from 'react';
import { CartProvider } from './context/CartContext.jsx'; // Import CartProvider
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection.jsx';
import FeaturedFlavors from './components/FeaturedFlavors';
import './App.css';
import Footer from './components/Footer.jsx';
import { Route, Routes } from 'react-router';
import ShopPage from './pages/Shop.jsx';
import ContactPage from './pages/Contact.jsx';
import CartPage from './pages/Cart.jsx';
import CheckoutPage from './pages/Checkout.jsx';
import Home from './pages/Home.jsx';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='shop' element={<ShopPage />} />
      <Route path='contact' element={<ContactPage />} />
      <Route path='cart' element={<CartPage />} />
      <Route path='checkout' element={<CheckoutPage />} />

    </Routes>
  );
}

export default App;