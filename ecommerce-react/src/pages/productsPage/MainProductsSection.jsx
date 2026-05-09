import React from 'react';
import { ProductsContainer } from './ProductsContainer';
import { ProductFilters } from './ProductFilters';
import { useSearchParams } from 'react-router';

export function MainSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(typeof setSearchParams);
  return (
    <>
      <ProductFilters setSearchParams={setSearchParams} />
      <ProductsContainer searchParams={searchParams} />
    </>
  );
}
