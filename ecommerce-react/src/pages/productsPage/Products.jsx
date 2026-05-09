import React from 'react';

import { CartOverlay } from '../../components/cart/CartOverlay';
import { MainSection } from './MainProductsSection';

export function Products() {
  return (
    <>
      <CartOverlay />
      <MainSection />;
    </>
  );
}
