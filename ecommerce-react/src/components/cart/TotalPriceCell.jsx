import React from 'react';

import { catalogIndexedById } from '../utils/catalog';
import { useCartContext } from '../../contexts/CartContext';

function CalculateTotalPrice(cartObject) {
  let price = 0;
  for (const cartItemId in cartObject) {
    price += catalogIndexedById[cartItemId].price * cartObject[cartItemId];
  }
  return price;
}

export function TotalPriceCell() {
  const { cartItems } = useCartContext();
  const totalPrice = CalculateTotalPrice(cartItems);
  return (
    <>
      <section className='flex bg-slate-100 p-1 text-green-700 rounded-md justify-evenly'>
        <p>Total:</p>
        <p>{`$${totalPrice}`}</p>
      </section>
    </>
  );
}
