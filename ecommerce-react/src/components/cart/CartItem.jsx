import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { catalogIndexedById } from '../../utils/catalog';
import { useCartContext } from '../../contexts/CartContext';

export function CartItem({ id, amount }) {
  const { addToCart, decreaseUnit, removeFromCart } = useCartContext();
  const { brand, price, name, image } = catalogIndexedById[id];
  return (
    <>
      <article className='flex bg-stone-100 p-1 border-rounded-mg relative'>
        <img
          className='h-24'
          src={image}
          alt={`Imagem do produto ${id}, ${name}`}
        />
        <button
          className='text-right text-l absolute top-0 right-2 text-slate-950 cursor-pointer'
          onClick={() => removeFromCart(id)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className='flex flex-col justify-around mx-2'>
          <p className='text-slate-950 text-sm'>{name}</p>
          <p className='text-slate-400 text-xs'>{brand}</p>
          <p className='text-green-700 text-lg'>{price}</p>
          <div className='flex text-slate-950 absolute right-2 bottom-0 mb-2'>
            <button
              className='border border-slate-400 hover:border-slate-900 mb-2 cursor-pointer'
              onClick={() => decreaseUnit(id)}
            >
              <FontAwesomeIcon icon={faMinus} className='p-1' />
            </button>
            <p className='p-2 w-8 mx-auto'>{amount}</p>
            <button
              className='border border-slate-400 hover:border-slate-900 mb-2 cursor-pointer'
              onClick={() => addToCart(id)}
            >
              <FontAwesomeIcon icon={faPlus} className='p-1' />
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
