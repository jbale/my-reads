import React from 'react';
import { render } from '@testing-library/react';
import Book from './Book';

const BOOK_BASE = {
  id: 1,
  title: 'Book',
  authors: [
    'Author'
  ],
  publishedDate: '2020',
  imageLinks: {
    smallThumbnail: 'http://smallthumbnail.com',
    thumbnail: 'http://thumbnail.com'
  }
}

it('renders book title', () => {
  const { getByText } = render(<Book book={BOOK_BASE} action={<span>action</span>}/>);

  const bookTitle = getByText(RegExp(BOOK_BASE.title, 'i'));

  expect(bookTitle).toBeInTheDocument();
});

it('renders book author', () => {
  const { getByText } = render(<Book book={BOOK_BASE} action={<span>action</span>}/>);

  const bookAuthors = getByText(RegExp(BOOK_BASE.authors[0], 'i'));

  expect(bookAuthors).toBeInTheDocument();
});

it('renders book cover image', () => {
  const { container } = render(<Book book={BOOK_BASE} action={<span>action</span>}/>);

  const bookCover = container.querySelector('.book-cover')

  expect(bookCover).toHaveStyle(`background-image: url(${BOOK_BASE.imageLinks.thumbnail})`)
});

it('renders action', () => {
  const { getByTestId } = render(<Book book={BOOK_BASE} action={<span data-testid="action">action</span>}/>);

  const action = getByTestId('action');

  expect(action).toBeInTheDocument();
});
