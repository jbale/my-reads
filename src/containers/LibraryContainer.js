import React from 'react';
import { getAll, update } from './../utils/booksApi';
import { shelves } from './../utils/shelves';
import { Switch, Route } from 'react-router-dom';

import { Library } from '../components/Library';
import SearchContainer from './SearchContainer';

class LibraryContainer extends React.Component {

  state = {
    books: {}
  }

  handleShelfChange = (book, shelf) => {
    const oldShelf = book.shelf;

    // Optimistic update
    this.updateBookShelf(book, shelf)

    update(book, shelf)
      .catch(() => this.updateBookShelf(book, oldShelf))
  }

  updateBookShelf(book, shelf) {
    this.setState(
      ({books}) => ({ ...books, [book.id]: {...book, shelf} }),
      () => {
        localStorage.myreads = JSON.stringify(this.state.books);
      }
    );
  }

  componentDidMount() {
    const cachedBooks = localStorage.myreads;

    if (cachedBooks) {
      this.setState({ books: JSON.parse(cachedBooks) })
    }

    getAll().then((books) => {
      this.storeBooks(books);
    })
  }

  storeBooks (books) {
    const bookById = books.reduce((acc, book) => ({
      ...acc,
      [book.id]: book
    }), {});

    localStorage.myreads = JSON.stringify(bookById);
    this.setState(bookById);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Library books={Object.values(this.state.books)} shelves={shelves} onShelfChange={this.handleShelfChange} />
        </Route>
        <Route exact path="/search">
          <SearchContainer libraryBooks={this.state.books} onShelfChange={this.handleShelfChange} />
        </Route>
      </Switch>
    )
  }
}

export default LibraryContainer;
