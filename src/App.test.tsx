import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('get started test', () => {
  render(<App />);
  const linkElement = screen.getByText(/gooooo/i);
  expect(linkElement).toBeInTheDocument();
});
