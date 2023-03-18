import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { MainPage } from 'pages/main/MainPage';
import { AboutPage } from 'pages/about/AboutPage';
import { NotFoundPage } from 'pages/not-found/NotFoundPage';
import { Layout } from 'components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
