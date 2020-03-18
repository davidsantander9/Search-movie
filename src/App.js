import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';

import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { MovieList } from './components/MovieList';

import { Detail } from './pages/Detail'

class App extends Component{
  state = { useSearch: false, results:[] }

  _handleResults = ( results ) => {
    this.setState({ results, useSearch: true })
  }

  _renderResults() {
    return(
      this.state.results.length === 0 
      ? <p>Sorry! 😢 Results no found</p>
      : <div className="movieList"><MovieList movies={ this.state.results}/></div>
    )     
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Title>Search Movies</Title>
          <img src={logo} className="App-logo" alt="logo" />
          <SearchForm onResults={ this._handleResults }/>
          {
            this.state.useSearch 
            ? this._renderResults()
            : <small>Use the form to search a movie</small> 
          }
          
        </header>
        
      </div>
    )
  }
}

export default App;
