import React from 'react';
import logo from '../assets/logo/hashtag.svg';
import { UserButtons } from './UserButtons';
import { useLocation, Link } from 'react-router';

export function Header() {
  const { pathname } = useLocation();
  const completeHeader = (
    <header className='flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-4 py-4 items-center justify-between text-xl z-10'>
      <Link to={'/'}>
        <img className='h-12 px-2' src={logo} alt='Logo-hashtag' />
      </Link>
      <UserButtons />
    </header>
  );
  const simpleHeader = (
    <header className='flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-4 py-4 items-center justify-between text-xl z-10'>
      <Link to={'/'}>
        <img className='h-12 px-2' src={logo} alt='Logo-hashtag' />
      </Link>
    </header>
  );
  return <>{pathname === '/' ? completeHeader : simpleHeader}</>;
}
