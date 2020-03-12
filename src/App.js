import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';

import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title>Search Movies</Title>
        <img src={logo} className="App-logo" alt="logo" />
        <SearchForm></SearchForm>
      </header>
    </div>
  );
}

export default App;
