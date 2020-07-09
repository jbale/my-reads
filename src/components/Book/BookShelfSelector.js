import React from 'react';
import PropTypes from 'prop-types';


const BookShelfSelector = ({currentShelf, shelves}) => {

  return (
    <div className="book-shelf-changer">
      <select defaultValue={currentShelf}>
        <option value="move" disabled>Move to...</option>
        {shelves.map((shelf) => (<option key={shelf.id} value={shelf.id}>{shelf.name}</option>))}
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookShelfSelector.propTypes = {
  currentShelf: PropTypes.string,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default BookShelfSelector;
