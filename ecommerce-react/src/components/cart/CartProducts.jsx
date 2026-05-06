import React from 'react';

import { useCartContext } from '../../contexts/CartContext';
import { CartItem } from './CartItem';

export function CartProducts() {
  const { cartItems } = useCartContext();
  const cartItemsArray = [];
  for (const itemId in cartItems) {
    cartItemsArray.push({ id: Number(itemId), amount: cartItems[itemId] });
  }

  return (
    <>
      <section className='flex flex-col justify-start overflow-auto gap-2 h-3/5'>
        {cartItemsArray.map((product) => {
          return <CartItem {...product} key={`key_${product.id}`} />;
        })}
      </section>
    </>
  );
}
