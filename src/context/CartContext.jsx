import React, { createContext, useState } from 'react';

// Create CartContext
export const CartContext = createContext();

// CartProvider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === itemId);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevItems, { id: itemId, quantity }];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  const updateCartItemQuantity = (itemId, quantity) => {
    setCartItems((prevItems) => {
      return prevItems.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      );
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
