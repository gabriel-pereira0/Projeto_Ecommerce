import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export const useCartContext = () => useContext(CartContext);

export const getAmountOfItemsInCart = (cartItemObj) => {
  let amount = 0;
  for (const productId in cartItemObj) {
    amount += cartItemObj[productId];
  }
  return amount;
};

export function CartContextProvider({ children }) {
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
        cartItems,
        toggleIsCartOpen,
        removeFromCart,
        addToCart,
        decreaseUnit,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
