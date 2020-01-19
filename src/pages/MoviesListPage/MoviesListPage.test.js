import React from 'react';
import { render } from '@testing-library/react';
import MoviesListPage from './MoviesListPage';

test('renders learn react link', () => {
  const { getByText } = render(<MoviesListPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
