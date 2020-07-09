import React from 'react';
import PropTypes from 'prop-types';

import BookCover from './BookCover';
import BookMetaData from './BookMetaData';

const Book = ({book, renderAction }) => {

  return (
    <div className="book">
      <div className="book-top">
        <BookCover cover={book.imageLinks.thumbnail}/>
        <div className="book-action-container">
          {renderAction(book)}
        </div>
      </div>
      <BookMetaData title={book.title} authors={book.authors} />
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  renderAction: PropTypes.func.isRequired
}

export default Book;
