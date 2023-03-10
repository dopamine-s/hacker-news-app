import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders hacker news link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/hacker news/i);
  expect(linkElement).toBeInTheDocument();
});
