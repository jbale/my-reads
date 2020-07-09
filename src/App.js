import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import LibraryContainer from './containers/LibraryContainer';
import SearchContainer from './containers/SearchContainer';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <LibraryContainer />
          </Route>
          <Route exact path="/search">
            <SearchContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
