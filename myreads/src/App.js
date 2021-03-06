import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Route, Link} from 'react-router-dom'
import './App.css';
import BookShelf from './BookShelf';
import SearchForm from './SearchForm';
import * as BooksAPI from './BooksAPI'

class App extends Component {

  state = {
    books: [],
    shelves: [
        {
            id: "currentlyReading",
            title: "Currently Reading"
        },
        {
            id: "wantToRead",
            title: "Want to Read"
        },
        {
            id: "read",
            title: "Read"
        },
    ]
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((results) => {
        this.setState(() => ({
          books: results
        }))
      })
  }


  updateBookshelfFunction = (bookId, shelfId) => {

    // get book
    BooksAPI.update({id: bookId}, shelfId)
      .then((results) => {

            // reload all books
            BooksAPI.getAll()
          .then((results) => {
            this.setState(() => ({
              books: results
            }))
           })
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={
            () => (
                <div>
                     <Link to="/search">Go to Search</Link>
                     <p/>
                     <BookShelf
                        id="currentlyReading"
                        title="Currently Reading"
                        books={this.state.books}
                        shelves={this.state.shelves}
                        updateBookshelfFunction={this.updateBookshelfFunction}
                        doFilter={true} 
                        />
                     <BookShelf
                        id="wantToRead"
                        title="Want to Read"
                        books={this.state.books}
                        shelves={this.state.shelves}
                        updateBookshelfFunction={this.updateBookshelfFunction}
                        doFilter={true} 
                        />
                     <BookShelf
                        id="read"
                        title="Books I have Read"
                        books={this.state.books}
                        shelves={this.state.shelves}
                        updateBookshelfFunction={this.updateBookshelfFunction}
                        doFilter={true} 
                        />
                </div>
            )
          }/>
          <Route exact path="/search" render={
            () => {

            // create object to lookup shelf by book id
            //
            var bookShelfLookup = {}
            this.state.books.forEach(book => {
                bookShelfLookup[book.id] = book.shelf;
            });

            return (
                 <SearchForm 
                    shelves={this.state.shelves}
                    updateBookshelfFunction={this.updateBookshelfFunction}
                    bookShelfLookup={bookShelfLookup}
                    />
            )}
          }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
