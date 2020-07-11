import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional component that accepts an image url and displays it in the shape of a book
*/
const BookCover = ({cover}) => {
  return (
    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${cover}")` }}></div>
  );
};

BookCover.propTypes = {
  cover: PropTypes.string.isRequired
}

export default BookCover;
