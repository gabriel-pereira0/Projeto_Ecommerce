import React, { useState } from 'react';
import { AppRoutes } from './Routes/AppRoutes';
import { CartContext } from './contexts/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(true);
  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      <AppRoutes />
    </CartContext.Provider>
  );
}

export default App;
