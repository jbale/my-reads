import React from 'react';
import PropTypes from 'prop-types';

import { BookGrid } from '../Book';
import BookShelfSelector from '../Library/BookShelfSelector';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

/**
 * Functional component that combines a SearchBar and BookGrid to display a search page
 */
const Search = ({books, shelves, onShelfChange, onSearch}) => {
  return (
    <div className="search-books">
      <SearchBar onSearch={onSearch} backNav={<Link className="close-search" to="/"></Link>} />
      <div className="search-books-results">
        <BookGrid books={books} renderBookAction={(book) => <BookShelfSelector book={book} shelves={shelves} onSelect={onShelfChange} />} />
      </div>
    </div>
  );
};

Search.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
  onShelfChange:  PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
}

export default Search;
