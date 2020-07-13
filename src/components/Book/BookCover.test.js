import React from 'react';
import { render } from '@testing-library/react';
import BookCover from './BookCover';

it('renders the cover image', () => {
  const cover = 'http://book.cover';
  const { container } = render(<BookCover cover={cover} />);
  expect(container.firstChild).toHaveStyle(`background-image: url(${cover})`)
});

it('renders no cover image when cover is empty', () => {
  const cover = '';
  const { container } = render(<BookCover cover={cover} />);
  expect(container.firstChild).not.toHaveStyle(`background-image: url(${cover})`)
});

it('renders no cover image when cover is null', () => {
  const cover = null;
  const { container } = render(<BookCover cover={cover} />);
  expect(container.firstChild).not.toHaveStyle(`background-image: url(${cover})`)
});

it('renders no cover image when cover is undefined', () => {
  const cover = undefined;
  const { container } = render(<BookCover cover={cover} />);
  expect(container.firstChild).not.toHaveStyle(`background-image: url(${cover})`)
});
