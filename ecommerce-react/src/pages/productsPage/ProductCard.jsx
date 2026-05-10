import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../contexts/CartContext';

export function ProductCard({
  id,
  name,
  brand,
  image,
  feminine,
  price,
  compact = false,
}) {
  const { addToCart } = useCartContext();
  return (
    <article
      className={`relative card-produto group ${compact ? 'w-50' : 'w-60'} shadow-xl flex flex-col border-2 border-gray-100 rounded-xl p-2 overflow-hidden`}
    >
      <div className='overflow-hidden rounded-xl'>
        <img
          src={image}
          alt={`Imagem do produto ${id}`}
          className='w-full object-cover transition-transform duration-300 group-hover:scale-105'
        />
      </div>

      <div className=' flex flex-1 flex-col justify-end transition-all duration-300 group-hover:-translate-y-2'>
        <p className='text-m text-slate-400 group-hover:opacity-0'>{brand}</p>
        <p className='text-m line-clamp-2 min-h-[30px]'>{name}</p>
        <p
          className={`${compact ? 'text-sm' : 'text- g'} text-green-700 group-hover:opacity-0`}
        >
          R$ {price}
        </p>
      </div>

      <div className='absolute bottom-2 left-2 right-2 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300'>
        <button
          className='bg-blue-700 rounded-xl text-white hover:bg-blue-600 w-full py-1'
          onClick={() => addToCart(id)}
        >
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </article>
  );
}
