import React from 'react';
import PropTypes from 'prop-types';
import { shelves } from './../utils/shelves';
import { search } from './../utils/booksApi';

import { Search } from './../components/Search';

class SearchContainer extends React.Component {

  static propTypes = {
    onShelfChange: PropTypes.func.isRequired,
    libraryBooks: PropTypes.object.isRequired
  }

  state = {
    books: []
  }

  constructor (props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch (query) {
    if(!query) {
      this.setState({books: []});
    } else {
      search(query)
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
