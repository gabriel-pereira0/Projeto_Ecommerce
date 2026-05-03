import React, { useContext, useState } from 'react';
import { Link } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';

import { CartContext, getAmountOfItemsInCart } from '../contexts/CartContext';

export function UserButtons() {
  const { toggleIsCartOpen, cartItems } = useContext(CartContext);

  const amountOfItems = getAmountOfItemsInCart(cartItems);

  return (
    <div className='flex justify-center'>
      <div className='px-2 relative ' onClick={toggleIsCartOpen}>
        <FontAwesomeIcon className='cursor-pointer' icon={faBagShopping} />
        {!!amountOfItems && (
          <div
            id='cart-amount'
            className='absolute inline-flex items-center justify-center w-6 h-6 font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 text-sm cursor-pointer'
          >
            {amountOfItems}
          </div>
        )}
      </div>
      <Link to={'/history'}>
        <FontAwesomeIcon className='px-2 cursor-pointer' icon={faUser} />
      </Link>
    </div>
  );
}
