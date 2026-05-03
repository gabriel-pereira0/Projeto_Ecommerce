import React from 'react';
import { ProductsContainer } from './ProductsContainer';
import { ProductFilters } from './ProductFilters';

export function MainSection() {
  return (
    <>
      <ProductFilters />
      <ProductsContainer />
    </>
  );
}
