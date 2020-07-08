import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const BookGrid = ({books, shelves}) => {
  console.log(books)

  return (
    <ol className="books-grid">
      {books.map((book) => (<li key={book.id}><Book book={book} shelves={shelves} /></li>))}
    </ol>
  );
};

BookGrid.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default BookGrid;

