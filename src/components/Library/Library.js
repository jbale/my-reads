import React from 'react';
import PropTypes from 'prop-types';

import BookShelves from './BookShelves';
import LibraryHeader from './LibraryHeader';

const Library = ({books, shelves}) => {

  return (
    <div className="library">
      <LibraryHeader />
      <BookShelves books={books} shelves={shelves} />
    </div>
  );
};

Library.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Library;
