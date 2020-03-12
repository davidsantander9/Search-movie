import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';

import {Title} from './components/Title'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title>Search Movies</Title>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
