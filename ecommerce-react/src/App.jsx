import React from 'react';
import { AppRoutes } from './Routes/AppRoutes';
import { CartContextProvider } from './contexts/CartContext';

function App() {
  return (
    <CartContextProvider>
      <AppRoutes />
    </CartContextProvider>
  );
}

export default App;
