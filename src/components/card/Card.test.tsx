import { render, screen } from '@testing-library/react';
import { Book } from 'interfaces';
import React from 'react';
import { Card } from './Card';

const data: Book = {
  title: 'Огнем и мечом',
  author: 'Генрик Сенкевич',
  price: 42.4,
  urlToImages: [
    'https://img4.labirint.ru/rc/c2c94db137a08c8f61a1d74a10d787a0/363x561q80/books29/287970/cover.jpg?1311337677',
  ],
  rating: 4.6,
};

describe('Card component', () => {
  test('renders card', () => {
    render(<Card product={data} />);

    expect(screen.getByText('Огнем и мечом')).toBeInTheDocument();
    expect(screen.getByText('Генрик Сенкевич')).toBeInTheDocument();
  });
});
