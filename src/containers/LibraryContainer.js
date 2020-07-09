import React from 'react';
import { getAll, update } from './../utils/booksApi';

import { Library } from '../components/Library';

const shelves = [
  {
    id: 'currentlyReading',
    name: 'Currently Reading'
  },
  {
    id: 'wantToRead',
    name: 'Want to Read'
  },
  {
    id: 'read',
    name: 'Read'
  }
];

class LibraryContainer extends React.Component {

  state = {
    books: []
  }

  handleShelfChange = (book, shelf) => {
    const oldShelf = book.shelf;

    // Optimistic update
    this.updateBookShelf(book, shelf)

    update(book, shelf)
      .catch(() => this.updateBookShelf(book, oldShelf))
  }

  updateBookShelf(book, shelf) {
    this.setState(({books}) => ({
      books: books
        .map((bookToUpdate) => bookToUpdate.id === book.id ? {...bookToUpdate, shelf: shelf} : bookToUpdate)
    }), () => {
      localStorage.myreads = JSON.stringify(this.state.books);
    });
  }

  componentDidMount() {
    const cachedBooks = localStorage.myreads;

    if (cachedBooks) {
      this.setState({ books: JSON.parse(cachedBooks) })
    }

    getAll().then((books) => {
      localStorage.myreads = JSON.stringify(books);
      this.setState({books});
    })
  }

  render() {
    return <Library books={this.state.books} shelves={shelves} onShelfChange={this.handleShelfChange} />
  }
}

export default LibraryContainer;
