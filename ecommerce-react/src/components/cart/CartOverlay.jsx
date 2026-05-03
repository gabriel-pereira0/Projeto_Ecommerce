import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export function CartOverlay() {
  const { toggleIsCartOpen, isCartOpen } = useContext(CartContext);
  return (
    <div
      className={`h-screen w-screen fixed top-0 left-0 flex justify-end z-20 ease-in-out duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <section
        id='outside-of-cart'
        className='w-3/4 bg-slate-950 opacity-50'
        onClick={toggleIsCartOpen}
      ></section>
      <section
        id='cart'
        className='w-1/4 bg-slate-950 min-w-96 border-l-4 border-slate-400 p-5 flex flex-col justify-between text-white'
      >
        <div className='flex justify-between border-b border-slate-50 px-4 py-2'>
          <p>Minha Sacola:</p>
          <button onClick={toggleIsCartOpen} className='cursor-pointer'>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
      </section>
    </div>
  );
}
