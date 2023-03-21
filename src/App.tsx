import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { MainPage } from 'pages/main/MainPage';
import { AboutPage } from 'pages/about/AboutPage';
import { NotFoundPage } from 'pages/not-found/NotFoundPage';
import { Layout } from './components/layout/Layout';

export class App extends Component {
  render(): JSX.Element {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    );
  }
}
