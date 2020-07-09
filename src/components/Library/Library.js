import React from 'react';
import PropTypes from 'prop-types';

import BookShelves from './BookShelves';
import LibraryHeader from './LibraryHeader';

const Library = ({books, shelves, onShelfChange}) => {

  return (
    <div className="library">
      <LibraryHeader />
      <BookShelves books={books} shelves={shelves} onShelfChange={onShelfChange} />
    </div>
  );
};

Library.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
  onShelfChange:  PropTypes.func.isRequired,
}

export default Library;