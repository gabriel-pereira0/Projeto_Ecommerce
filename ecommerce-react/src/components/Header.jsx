import React from 'react';
import logo from '../assets/logo/hashtag.svg';
import { UserButtons } from './UserButtons';
import { useLocation, Link } from 'react-router';
import { Navbar } from './Navbar';

export function Header() {
  const { pathname } = useLocation();
  const completeHeader = (
    <header className='flex text-xl sticky top-0 shadow-sm shadow-slate-400 bg-white text-black px-4 py-4 items-center justify-between text-xl z-10'>
      <Link to={'/'}>
        <p>MINIMAL CO.</p>
      </Link>
      <Navbar />
      <UserButtons />
    </header>
  );
  const simpleHeader = (
    <header className='flex text-xl sticky top-0 shadow-sm shadow-slate-400 bg-white text-black px-4 py-4 items-center justify-between text-xl z-10'>
      <Link to={'/'}>
        <p>MINIMAL CO.</p>
      </Link>
    </header>
  );
  return <>{pathname === '/checkout' ? simpleHeader : completeHeader}</>;
}
