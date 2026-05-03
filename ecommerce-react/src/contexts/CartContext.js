import { createContext } from 'react';

export const CartContext = createContext(null);

export const getAmountOfItemsInCart = (cartItemObj) => {
  let amount = 0;
  for (const productId in cartItemObj) {
    amount += cartItemObj[productId];
  }
  return amount;
};
