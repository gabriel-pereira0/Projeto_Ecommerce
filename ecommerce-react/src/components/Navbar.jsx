import React from 'react';
import { Link } from 'react-router';

export function Navbar() {
  return (
    <nav>
      <ul className='flex flex-row gap-4'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/products'}>Produtos</Link>
        </li>
        <li>
          <Link to={'/about'}>Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}
