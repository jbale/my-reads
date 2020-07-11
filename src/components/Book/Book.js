import React from 'react';
import PropTypes from 'prop-types';

import BookCover from './BookCover';
import BookMetaData from './BookMetaData';

/**
 * Functional component that combines BookCover and BookMetaData together with a customisable
 * action component to display a representation of a book
 */
const Book = ({book, action }) => {

  return (
    <div className="book">
      <div className="book-top">
        {
          // TODO: handle empty thumbnails with a generic cover
        }
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
