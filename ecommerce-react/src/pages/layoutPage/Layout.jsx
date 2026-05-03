import React from 'react';
import { Outlet } from 'react-router';
import { Header } from '../../components/Header';

export function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
