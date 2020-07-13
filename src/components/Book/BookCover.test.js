import React from 'react';
import { render } from '@testing-library/react';
import BookCover from './BookCover';

it('renders the cover image', () => {
  const cover = 'http://book.cover';
  const { container } = render(<BookCover cover={cover} />);
  expect(container.firstChild).toHaveStyle(`background-image: url(${cover})`)
});
