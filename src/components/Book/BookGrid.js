import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const BookGrid = ({books, renderBookAction}) => {
  return (
    <ol className="books-grid">
      {
        books
          .sort((b1, b2) => new Date(b2.publishedDate) - new Date(b1.publishedDate))
          .map((book) => (<li key={book.id}><Book book={book} action={renderBookAction(book)} /></li>))
      }
    </ol>
  );
};

BookGrid.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderBookAction: PropTypes.func.isRequired
}

export default BookGrid;

