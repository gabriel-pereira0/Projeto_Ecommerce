import React, { useState } from 'react';
import { AppRoutes } from './Routes/AppRoutes';
import { CartContext } from './contexts/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const removeFromCart = (productId) => {
    const cartItemsCopy = { ...cartItems };
    delete cartItemsCopy[productId];
    setCartItems(cartItemsCopy);
  };

  const addToCart = (productId) => {
    setCartItems({
      ...cartItems,
      [productId]: (cartItems[productId] ?? 0) + 1,
    });
  };

  const decreaseUnit = (productId) => {
    if (cartItems[productId] > 1) {
      setCartItems({
        ...cartItems,
        [productId]: cartItems[productId] - 1,
      });
    } else {
      removeFromCart(productId);
    }
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        toggleIsCartOpen,
        cartItems,
        addToCart,
        decreaseUnit,
        removeFromCart,
      }}
    >
      <AppRoutes />
    </CartContext.Provider>
  );
}

export default App;
