import React from 'react';
import PropTypes from 'prop-types';


const BookCover = ({cover}) => {
  return (
    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${cover}")` }}></div>
  );
};

BookCover.propTypes = {
  cover: PropTypes.string.isRequired
}

export default BookCover;
