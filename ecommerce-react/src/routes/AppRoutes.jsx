import React from 'react';
import { Routes, Route } from 'react-router';

import { Home } from '../pages/homePage/Home';
import { Layout } from '../pages/layoutPage/Layout';
import { Checkout } from '../pages/checkoutPage/Checkout';
import { PurchaseHistory } from '../pages/purchaseHistoryPage/PurchaseHistory';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/history' element={<PurchaseHistory />} />
      </Route>
    </Routes>
  );
}
