import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

const Cart = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useContext(CartContext);

  const handleIncrease = (itemId) => {
    const item = cartItems.find(item => item.id === itemId);
    updateCartItemQuantity(itemId, item.quantity + 1);
  };

  const handleDecrease = (itemId) => {
    const item = cartItems.find(item => item.id === itemId);
    if (item.quantity > 1) {
      updateCartItemQuantity(itemId, item.quantity - 1);
    } else {
      removeFromCart(itemId);
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * 5.00, 0); // Assuming a fixed price for simplicity

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <div>
                <h2 className="text-lg">{item.name}</h2>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div>
                <button onClick={() => handleDecrease(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">-</button>
                <button onClick={() => handleIncrease(item.id)} className="bg-green-500 text-white px-2 py-1 rounded">+</button>
                <button onClick={() => removeFromCart(item.id)} className="bg-blue-500 text-white px-2 py-1 rounded">Remove</button>
              </div>
            </div>
          ))}
          <h2 className="text-xl font-bold mt-4">Total Price: ${totalPrice.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
