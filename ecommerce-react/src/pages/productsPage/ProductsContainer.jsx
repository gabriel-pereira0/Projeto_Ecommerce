import React from 'react';
import { Link, useLocation } from 'react-router';

import { ProductCard } from './ProductCard';
import { catalog } from '../../components/utils/catalog';

export function ProductsContainer({ searchParams }) {
  searchParams.get('filterby');
  const { pathname } = useLocation();

  const fullProduct = (
    <section className='container flex flex-wrap mx-auto p-10 justify-center gap-10'>
      {(searchParams.get('filterby') !== null
        ? catalog.filter(
            (p) => p.feminine === (searchParams.get('filterby') === 'fem'),
          )
        : catalog
      ).map((product) => (
        <ProductCard key={`product_${product.id}`} {...product} />
      ))}
    </section>
  );
  const compactProducts = (
    <section className='w-full bg-stone-100 p-6'>
      <div className='max-w-7xl mx-auto grid grid-cols-6 gap-6 gap-x-8 p-2'>
        {catalog.map((product) => (
          <ProductCard key={`products_${product.id}`} {...product} compact />
        ))}
      </div>

      <div className='flex justify-center p-2'>
        <Link
          className='text-sm tracking-wide uppercase hover:text-blue-600 transition-colors'
          to={'/products'}
        >
          Ver todos os produtos →
        </Link>
      </div>
    </section>
  );

  return <>{pathname === '/' ? compactProducts : fullProduct}</>;
}
