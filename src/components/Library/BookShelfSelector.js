import React from 'react';
import PropTypes from 'prop-types';

const BookShelfSelector = ({shelves, onSelect, book}) => {

  const handleSelect = (event) => {
    onSelect(book, event.target.value);
  }

  return (
    <select className="book-shelf-changer" defaultValue={book.shelf ? book.shelf : 'none'} onChange={handleSelect}>
      <option value="move" disabled>Move to...</option>
      {shelves.map((shelf) => (<option key={shelf.id} value={shelf.id}>{shelf.name}</option>))}
      <option value="none">None</option>
    </select>
  );
};

BookShelfSelector.propTypes = {
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
}

export default BookShelfSelector;
