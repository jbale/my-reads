import React from 'react';
import PropTypes from 'prop-types';

import { BookGrid } from '../Book';
import BookShelfSelector from './BookShelfSelector';

/**
 * Functional component that combines the BookGrid component with a
 * simple title to represents a book shelf.
 */
const BookShelf = ({books = [], shelves, shelf, onShelfChange}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        {books && <BookGrid books={books} renderBookAction={(book) => <BookShelfSelector book={book} shelves={shelves} onSelect={onShelfChange} />} />}
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
  shelf: PropTypes.PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default BookShelf;
