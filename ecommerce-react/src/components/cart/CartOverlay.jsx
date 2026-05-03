import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function CartOverlay() {
  const cartInfo = useContext(CartContext);
  return (
    <div
      className={`h-screen w-screen fixed top-0 left-0 flex justify-end z-20 ease-in-out duration-300 ${cartInfo.isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <section
        id='outside-of-cart'
        className='w-3/4 bg-slate-950 opacity-50'
        onClick={() => cartInfo.setIsCartOpen(false)}
      ></section>
      <section
        id='cart'
        className='w-1/4 bg-slate-950 min-w-96 border-l-4 border-slate-400 p-5 flex flex-col justify-between text-white'
      ></section>
    </div>
  );
}
