import React from 'react';
import { Link } from 'react-router';
import bghome from '../../assets/img/bg-home.jpg';

export function MainHomeSection() {
  return (
    <section className='relative h-[calc(100vh-60px)]'>
      <img src={bghome} className='w-full h-full object-cover' />

      <div className='absolute inset-0 bg-black/40' />

      <div className='absolute inset-0 flex flex-col justify-center px-20 text-white'>
        <h1 className='text-6xl font-bold'>MINIMAL CO.</h1>

        <p className='mt-4 text-xl'>Minimalismo que veste atitude.</p>

        <button className='mt-6 w-40 bg-white text-black py-3 rounded-lg cursor-pointer hover:bg-gray-300'>
          <Link to={'/products'}>Comprar agora</Link>
        </button>
      </div>
    </section>
  );
}
