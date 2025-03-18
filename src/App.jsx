import React from 'react';
import { CartProvider } from './context/CartContext.jsx'; // Import CartProvider
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection.jsx';
import FeaturedFlavors from './components/FeaturedFlavors';
import './App.css';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <CartProvider>
      <div>
        <Navbar />
        <HeroSection />
        <FeaturedFlavors />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
