import { render, screen } from '@testing-library/react';
import React from 'react';
import { Search } from './Search';

describe('Search component', () => {
  test('renders search', () => {
    render(<Search />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
