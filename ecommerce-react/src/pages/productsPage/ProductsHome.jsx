import React from 'react';
import { ProductsContainer } from './ProductsContainer';
import { useSearchParams } from 'react-router';

export function ProductsHome() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <ProductsContainer searchParams={searchParams} />
    </>
  );
}
