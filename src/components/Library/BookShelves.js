import React from 'react';
import PropTypes from 'prop-types';

import BookShelf from './BookShelf';

/**
 * Functional component to display a list of books grouped by thier shelves
 */
const BookShelves = ({books = [], shelves, onShelfChange}) => {

  // Convert from list of book to dict of books by shelf
  const booksByShelf = books
    .filter(({shelf}) => shelf !== null)
    .reduce((acc, book) => ({
      ...acc,
      [book.shelf]: [
        ...(acc[book.shelf] ? [...acc[book.shelf], book] : [book])
      ]
    }), {});

  return (
    <div className="bookshelves">
      {shelves.map((shelf) => (
        <BookShelf
          key={shelf.id}
          books={booksByShelf[shelf.id]}
          shelves={shelves}
          shelf={shelf}
          onShelfChange={onShelfChange}
        />
      ))}
    </div>
  );
};

BookShelves.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default BookShelves;
