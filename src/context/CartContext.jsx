import React, { createContext, useState } from 'react';

// Create CartContext
export const CartContext = createContext();

// CartProvider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  
 const addToCart = (item) => {
  const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); // check if the item is already in the cart

  if (isItemInCart) {
  setCartItems(
      cartItems.map((cartItem) => // if the item is already in the cart, increase the quantity of the item
      cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem // otherwise, return the cart item
      )
  );
  } else {
  setCartItems([...cartItems, { ...item, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
  }
};

const removeFromCart = (item) => {
  const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

  if (isItemInCart.quantity === 1) {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)); // if the quantity of the item is 1, remove the item from the cart
  } else {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
          : cartItem
      )
    );
  }
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
