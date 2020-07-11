import React from 'react';
import PropTypes from 'prop-types';
import { shelves } from './../utils/shelves';
import { search } from './../utils/booksApi';

import { Search } from './../components/Search';

/**
 * Container component that handles the state of the users book search.
 */
class SearchContainer extends React.Component {

  static propTypes = {
    /** Passed to children to output shelf change calls to LibraryConatiner (parent) */
    onShelfChange: PropTypes.func.isRequired,
    /** Book current in a users library */
    libraryBooks: PropTypes.object.isRequired
  }

  /** Component state use to store search results */
  state = {
    books: []
  }

  /**
   * Constructor used to bind components context to function being called
   * outside of the class context
   */
  constructor (props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  /**
   * Handles search when display components call search
   */
  handleSearch (query) {
    if(!query) {
      // If query is empty there will be no results
      this.setState({books: []});
    } else {
      search(query)
        // Hydrate the serach results with data from the books in the users library such as thier shelf
        .then((books) => books.map((book) => this.props.libraryBooks[book.id] ? this.props.libraryBooks[book.id] : book ))
        .then((books) => this.setState({books}))
        .catch(() => this.setState({books: []}));
    }
  }

  render() {
    return (
      <Search
        books={this.state.books}
        shelves={shelves}
        onShelfChange={this.props.onShelfChange}
        onSearch={this.handleSearch}
      />
    )
  }
}

export default SearchContainer;
