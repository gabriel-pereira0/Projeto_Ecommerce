import React from 'react';
import { ProductCard } from './ProductCard';
import { catalog } from '../../utils/catalog';

export function ProductsContainer({ femaleProducts }) {
  return (
    <>
      <section className='container flex flex-wrap mx-auto p-10 justify-center gap-10'>
        {(femaleProducts !== null
          ? catalog.filter((p) => p.feminine === femaleProducts)
          : catalog
        ).map((product) => (
          <ProductCard key={`product_${product.id}`} {...product} />
        ))}
      </section>
    </>
  );
}
