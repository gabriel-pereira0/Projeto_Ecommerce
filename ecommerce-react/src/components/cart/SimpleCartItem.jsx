import React from 'react';

import { catalogIndexedById } from '../utils/catalog';

export function SimpleCartItem({ id, amount }) {
  const { brand, price, name, image } = catalogIndexedById[id];
  return (
    <>
      <article className='flex bg-stone-100 p-1 border-rounded-mg relative'>
        <img
          className='h-24'
          src={image}
          alt={`Imagem do produto ${id}, ${name}`}
        />

        <div className='flex flex-col justify-around mx-2'>
          <p className='text-slate-950 text-sm'>{name}</p>
          <p className='text-slate-400 text-xs'>{brand}</p>
          <p className='text-green-700 text-lg'>R${price * amount}</p>
          <div className='flex text-slate-950  absolute right-2 bottom-0 mb-2'>
            <p className='text-slate-950'>Qtd: {amount}</p>
          </div>
        </div>
      </article>
    </>
  );
}
