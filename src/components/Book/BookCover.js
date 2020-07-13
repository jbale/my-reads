import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional component that accepts an image url and displays it in the shape of a book
*/
const BookCover = ({cover}) => {
  const style = {
    width: 128,
    height: 193
  }

  if (cover) {
    style.backgroundImage = `url("${cover}")`;
  }

  return (
    <div className="book-cover" style={style}></div>
  );
};

BookCover.propTypes = {
  cover: PropTypes.string
}

export default BookCover;
