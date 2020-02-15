import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Book from './Book';
import BookShelf from './BookShelf';
import SearchForm from './SearchForm';
import * as BooksAPI from './BooksAPI'

class App extends Component {

  state = {
    books: [],
    shelves: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((results) => {
        console.log(results)
        //this.setState(() => ({
        //  contacts
        //})) 
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
                     <Book
                        id="id 000" 
                        title="A Title" 
                        imageLinks={{
                        smallThumbnail: "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"}}
                        authors={["author Hariet", "author Chuck"]}
                        shelf="read"
                      />
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
