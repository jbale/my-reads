import React from 'react';
import { render } from '@testing-library/react';
import BookMetaData from './BookMetaData';

it('renders title text', () => {
  const title = 'book title';
  const { getByText } = render(<BookMetaData title={title} />);
  const titleElement = getByText(RegExp(title));
  expect(titleElement).toBeInTheDocument();
});

it('renders "Unknown" when authors is Undefined', () => {
  const title = 'book title';
  const { getByText } = render(<BookMetaData title={title} />);
  const unknownElement = getByText(/Unknown/i);
  expect(unknownElement).toBeInTheDocument();
});

it('renders "Unknown" when authors is Null', () => {
  const title = 'book title';
  const { getByText } = render(<BookMetaData title={title} authors={null} />);
  const unknownElement = getByText(/Unknown/i);
  expect(unknownElement).toBeInTheDocument();
});

it('renders "Unknown" when authors is empty ([])', () => {
  const title = 'book title';
  const { getByText } = render(<BookMetaData title={title} authors={[]} />);
  const unknownElement = getByText(/Unknown/i);
  expect(unknownElement).toBeInTheDocument();
});
