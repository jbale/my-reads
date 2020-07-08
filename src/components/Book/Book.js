import React from 'react';
import PropTypes from 'prop-types';

import BookCover from './BookCover';
import BookMetaData from './BookMetaData';
import BookShelfSelector from './BookShelfSelector';

const Book = ({book, shelves}) => {

  return (
    <div className="book">
      <div className="book-top">
        <BookCover cover={book.cover}/>
        <div className="book-shelf-changer-container">
          <BookShelfSelector currentShelf={book.shelf} shelves={shelves} />
        </div>
      </div>
      <BookMetaData title={book.title} authors={book.authors} />
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Book;
