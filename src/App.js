import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
 
import './App.css';
import 'bulma/css/bulma.css';

import { Detail } from './pages/Detail'
import { Home } from './pages/Home'

class App extends Component{

  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/detail/:id' component={ Detail } />
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App;
