import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Functional component used to display the seach button that Links to search page
 */
const SearchButton = () => {
  return (
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  );
};

export default SearchButton;

