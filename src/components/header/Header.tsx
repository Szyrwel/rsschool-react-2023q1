import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';

function setActive({ isActive }: { isActive: boolean }): string {
  return isActive ? 'header-link_active' : 'header-link';
}

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className={setActive}>
          Home
        </NavLink>
        <NavLink to="/about" className={setActive}>
          About
        </NavLink>
        <NavLink to="/form" className={setActive}>
          Form
        </NavLink>
      </div>
    </header>
  );
}
