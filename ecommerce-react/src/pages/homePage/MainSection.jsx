import React, { useState } from 'react';
import { ProductsContainer } from './ProductsContainer';
import { ProductFilters } from './ProductFilters';

export function MainSection() {
  const [femaleProducts, setFemaleProducts] = useState(null);
  return (
    <>
      <ProductFilters setFemaleProducts={setFemaleProducts} />
      <ProductsContainer femaleProducts={femaleProducts} />
    </>
  );
}
