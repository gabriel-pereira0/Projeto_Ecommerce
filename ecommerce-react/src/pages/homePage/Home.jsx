import React from 'react';

import { CartOverlay } from '../../components/cart/CartOverlay';
import { MainSection } from './MainSection';

export function Home() {
  return (
    <>
      <CartOverlay />
      <MainSection />;
    </>
  );
}
