import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from '../../utils/helpers';

/**
 * React controlled presentation component to display and handle input for a search bar
 */
class SearchBar extends React.Component {

  static propTypes = {
    /** Back navigation component */
    backNav:  PropTypes.object.isRequired,
    /** onSeatch callback prop */
    onSearch:  PropTypes.func.isRequired
  }

  /** Component state to store users query */
  state = {
    query: ''
  }

  /** Class property used to assign a debounce function during class creation */
  handleSearchDebounced;

  /**
   * Constructor used to bind components context to function being called
   * outside of the class context and wrap the onSeach prop with a debounce
   */
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleSearchDebounced = debounce(props.onSearch, 400);
  }

  /**
   * Handles the onChange event from the input and updates setState to track the
   * inputs state in React. It also called the debounce props.onSearch function to
   * be handled by parent components
   */
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
