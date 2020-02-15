import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import BookShelf from './BookShelf';
import SearchForm from './SearchForm';
import * as BooksAPI from './BooksAPI'

class App extends Component {

  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((results) => {
        console.log(results)
        this.setState(() => ({
          books: results
        })) 
      })  
  }

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
                     <BookShelf
                        id="currentlyReading" 
                        title="Currently Reading"
                        books={this.state.books}
                        />
                     <BookShelf
                        id="wantToRead" 
                        title="Want to Read"
                        books={this.state.books}
                        />
                     <BookShelf
                        id="read" 
                        title="Books I have Read"
                        books={this.state.books}
                        />
                </div>
            )
          }/>
          <Route exact path="/search" render={
            () => (
                <div>Search Page
                <p/>
                     <Link to="/">Go to Home</Link>
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
