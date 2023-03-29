import { Header } from '../header/Header';
import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import './layout.scss';

export class Layout extends Component {
  render(): JSX.Element {
    return (
      <>
        <Header />
        <main className="main__container">
          <Outlet />
        </main>
      </>
    );
  }
}
