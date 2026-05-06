import React from 'react';
import { Routes, Route } from 'react-router';

import { Layout } from '../pages/layoutPage/Layout';
import { Home } from '../pages/homePage/Home';
import { Checkout } from '../pages/checkoutPage/Checkout';
import { PurchaseHistory } from '../pages/purchaseHistoryPage/PurchaseHistory';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/history' element={<PurchaseHistory />} />
      </Route>
    </Routes>
  );
}
