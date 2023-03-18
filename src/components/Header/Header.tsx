import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </header>
    );
  }
}
