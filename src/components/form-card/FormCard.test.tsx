import { render, screen } from '@testing-library/react';
import { Card } from 'pages/forms/interface';
import React from 'react';
import { FormCard } from './FormCard';

const data: Card = {
  name: 'Szyrwel',
  sex: 'Male',
  pathToAvatar: '',
  date: '2013-08-16',
  country: 'Belarus',
  checkbox: true,
};

describe('FormCard component', () => {
  test('renders form-card', () => {
    render(<FormCard card={data} />);

    expect(screen.getByText('Szyrwel')).toBeInTheDocument();
    expect(screen.getByText('Belarus')).toBeInTheDocument();
  });
});
