import React from 'react';
import PropTypes from 'prop-types';

import BookShelf from './BookShelf';
import BookShelfSelector from './BookShelfSelector';

const BookShelves = ({books, shelves, onShelfChange}) => {

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
          shelf={shelf}
          renderBookShelfSelector={(book) => <BookShelfSelector book={book} shelves={shelves} onSelect={onShelfChange} />}
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
