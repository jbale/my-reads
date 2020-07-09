import React from 'react';
import PropTypes from 'prop-types';

import { BookGrid } from '../Book';

const BookShelf = ({books, shelf, renderBookShelfSelector}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        {books && <BookGrid books={books} renderBookAction={renderBookShelfSelector} />}
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  shelf: PropTypes.PropTypes.object.isRequired,
  renderBookShelfSelector: PropTypes.func.isRequired
}

export default BookShelf;
