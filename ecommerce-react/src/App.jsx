import React, { useState } from 'react';
import { AppRoutes } from './Routes/AppRoutes';
import { CartContext } from './contexts/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState();
  const addToCart = (productId) => {
    const updatedCart = {
      ...cartItems,
      [productId]: (productId[productId] ?? 0) + 1,
    };
    setCartItems(updatedCart);
  };

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartContext.Provider
      value={{ isCartOpen, toggleIsCartOpen, cartItems, addToCart }}
    >
      <AppRoutes />
    </CartContext.Provider>
  );
}

export default App;
