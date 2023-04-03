import { Header } from '../header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './layout.scss';

export function Layout() {
  return (
    <>
      <Header />
      <main className="main__container">
        <Outlet />
      </main>
    </>
  );
}
