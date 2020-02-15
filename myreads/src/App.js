import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={
            () => (
                <div>Main Page</div>
            )
          }/>
          <Route exact path="/search" render={
            () => (
                <div>Search Page</div>
            )
          }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
