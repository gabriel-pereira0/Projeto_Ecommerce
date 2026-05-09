import React from 'react';
import { Routes, Route } from 'react-router';

import { Layout } from '../pages/layoutPage/Layout';
import { Products } from '../pages/productsPage/Products';
import { Checkout } from '../pages/checkoutPage/Checkout';
import { PurchaseHistory } from '../pages/purchaseHistoryPage/PurchaseHistory';
import { About } from '../pages/aboutPage/About';
import { Home } from '../pages/Home/Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/history' element={<PurchaseHistory />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  );
}
