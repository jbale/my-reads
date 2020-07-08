import React from 'react';
import PropTypes from 'prop-types';

import BookShelf from './BookShelf';

const BookShelves = ({books, shelves}) => {

  const booksByShelf = books
    .filter(({shelf}) => shelf !== null)
    .reduce((acc, book) => ({
      ...acc,
      [book.shelf]: [
        ...(acc[book.shelf] ? [...acc[book.shelf], book] : [book])
      ]
    }), {});

    console.log(booksByShelf)

  return (
    <div className="bookshelves">
      {shelves.map((shelf) => <BookShelf key={shelf.id} books={booksByShelf[shelf.id]} shelf={shelf} shelves={shelves} />)}
    </div>
  );
};

BookShelves.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default BookShelves;
