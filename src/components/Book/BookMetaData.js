import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional component displays title and author props
*/
const BookMetaData = ({title, authors = ['Unknown']}) => {

  const authorsDisplay = authors && authors.length ? authors.join(', ') : 'Unknown';

  return (
    <React.Fragment>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authorsDisplay}</div>
    </React.Fragment>
  );
};

BookMetaData.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string)
}

export default BookMetaData;
