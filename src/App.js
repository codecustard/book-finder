import React from 'react';
import logo from './logo.svg';
import './App.css';

import Searchbar from './components/Searchbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        BOOK FINDER
        <Searchbar />
      </header>
    </div>
  );
}

export default App;
