import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Header } from 'components/Header/Header';
import { MainPage } from 'pages/main/MainPage';
import { AboutPage } from 'pages/about/AboutPage';
import { NotFoundPage } from 'pages/not-found/NotFoundPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
