import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

describe('App', () => {
  test('renders App', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getAllByRole('link').length).toEqual(3);
  });
  test('link to AboutPage works', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const link = screen.getByText(/About/i);
    fireEvent.click(link);
    expect(screen.queryByText('AboutPage')).toBeNull();
  });
});
