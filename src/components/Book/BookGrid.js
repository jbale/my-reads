import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

/**
 * Functional component to display a list of books in a grid sorted by published date
 *
 * It accepts a render prop to render an action for each book this provides a way for
 * consumers of this component to specifiy the action they wish to display alongside
 * the Book
 */
const BookGrid = ({books = [], renderBookAction}) => {
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

