import React from 'react';
import { render } from '@testing-library/react';
import BookGrid from './BookGrid';

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

it('renders the correct amount of books', () => {
  const books = [{...BOOK_BASE, id: 1}, {...BOOK_BASE, id: 2}]
  const { container } = render(<BookGrid books={books} renderBookAction={() => <span>action</span>}/>);
  const list = container.querySelectorAll('ol li')
  expect(list).toHaveLength(2);
});

it('renders unique action for each book', () => {
  const books = [{...BOOK_BASE, id: 1}, {...BOOK_BASE, id: 2}]
  const { getByTestId } = render(<BookGrid books={books} renderBookAction={(book) => <span data-testid={book.id}>action</span>}/>);

  const bookOneAction = getByTestId('1');
  const bookTwoAction = getByTestId('2');

  expect(bookOneAction).toBeInTheDocument();
  expect(bookTwoAction).toBeInTheDocument();
});
