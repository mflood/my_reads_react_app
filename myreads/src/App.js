import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Book from './Book';
import BookShelf from './BookShelf';
import SearchForm from './SearchForm';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={
            () => (
                <div>Main Page
                <p/>
                     <Link to="/search">Go to Search</Link>
                     <p/>
                     <Book/>
                     <p/>
                     <BookShelf/>
                </div>
            )
          }/>
          <Route exact path="/search" render={
            () => (
                <div>Search Page
                <p/>
                     <Link to="/">Go to Home</Link>
                     <p/>
                     <Book/>
                     <p/>
                     <BookShelf/>
                     <p/>
                     <SearchForm/>
                </div>
            )
          }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
