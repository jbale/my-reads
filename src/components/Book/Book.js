import React from 'react';
import PropTypes from 'prop-types';

import BookCover from './BookCover';
import BookMetaData from './BookMetaData';

const Book = ({book, action }) => {

  return (
    <div className="book">
      <div className="book-top">
        <BookCover cover={book.imageLinks ? book.imageLinks.thumbnail : ''}/>
        <div className="book-action-container">
          {action}
        </div>
      </div>
      <BookMetaData title={book.title} authors={book.authors} />
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  action: PropTypes.object.isRequired
}

export default Book;
