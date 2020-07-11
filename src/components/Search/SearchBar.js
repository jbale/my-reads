import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from '../../utils/helpers';

class SearchBar extends React.Component {

  static propTypes = {
    backNav:  PropTypes.object.isRequired,
    onSearch:  PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  handleSearchDebounced;

  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleSearchDebounced = debounce(props.onSearch, 400);
  }

  handleInput(event) {
    const query = event.target.value;
    this.setState({ query });
    this.handleSearchDebounced(query);
  }

  render() {
    return (
      <div className="search-books-bar">
        { this.props.backNav }
        <div className="search-books-input-wrapper">
          <input value={this.state.query} type="text" placeholder="Search by title or author" onChange={this.handleInput} />
        </div>
      </div>
    )
  }
}


export default SearchBar;
