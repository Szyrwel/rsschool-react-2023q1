import { Header } from 'components/header/Header';
import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import './layout.scss';

export class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="container">
          <Outlet />
        </main>
      </>
    );
  }
}
