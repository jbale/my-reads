import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import LibraryContainer from './containers/LibraryContainer';

function App() {
  return (
    <Router>
      <div className="app">
        <LibraryContainer />
      </div>
    </Router>
  );
}

export default App;
