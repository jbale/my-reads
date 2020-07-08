import React from 'react';
import PropTypes from 'prop-types';

const BookMetaData = ({title, authors}) => {

  return (
    <React.Fragment>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors.join(', ')}</div>
    </React.Fragment>
  );
};

BookMetaData.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default BookMetaData;
