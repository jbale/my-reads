import React from 'react';
import { getAll, update } from './../utils/booksApi';
import { shelves } from './../utils/shelves';
import { Switch, Route } from 'react-router-dom';

import { Library } from '../components/Library';
import SearchContainer from './SearchContainer';

/**
 * Container component that handles the state of the users book shelves.
 */
class LibraryContainer extends React.Component {

  /** Component state to store books by id */
  state = {
    books: {}
  }

  /**
   * Constructor used to bind components context to function being called
   * outside of the class context
   */
  constructor(props) {
    super(props);

    this.handleShelfChange = this.handleShelfChange.bind(this);
  }

  /**
   * Lifecycle method used to load data from server. It also checks if any
   * data has been stored in the cache and sets that as the initial state
   * to provide meaninful data to the user in the fastest possible time
   */
  componentDidMount() {
    // TODO: Use a better cache strategy. Possible solutions include use of IndexedDB and/or Cache API
    const cachedBooks = localStorage.myreads;

    if (cachedBooks) {
      this.setState({ books: JSON.parse(cachedBooks) })
    }

    getAll().then((books) => {
      this._storeBooks(books);
    })
  }

  /**
   * Method used to pass down to children components resposible for shelf logic.
   * It performs an optimistic update in order to provide user with a quick response
   * to their actions.
   */
  handleShelfChange(book, shelf) {
    const oldShelf = book.shelf;

    // Optimistic update
    this._updateBookShelf(book, shelf)

    // TODO: Provide a way to inform user of error
    update(book, shelf)
      .catch(() => this._updateBookShelf(book, oldShelf))
  }


  /**
   * Private method that calls setState to update the shelf for a given book
   */
  _updateBookShelf(book, shelf) {
    this.setState(
      ({books}) => ({ books: {...books, [book.id]: {...book, shelf} }}),
      () => {
        localStorage.myreads = JSON.stringify(this.state.books);
      }
    );
  }

  /**
   * Private method use to store a list of book as a dictionary. Dictionary is
   * prefered as it provodes fast acces to individual books for easy update.
   */
  _storeBooks (books) {
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
