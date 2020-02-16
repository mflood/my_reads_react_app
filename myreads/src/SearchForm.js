import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf';

class SearchForm extends Component {

  state = {
    books: []
  }

  handleSearchTextChanged = (e) => {

      if (e.target.value === "") {
        this.setState({books: []})
      } else {
        // make api call 
        BooksAPI.search(e.target.value)
        .then((results) => {
            if (typeof results.error !== 'undefined') {
                // no books came back
                this.setState({books: []})
            } else {

                // filter out books that do not have imageLinks
                const thumbnailBooks = results.filter( (book) => (book.imageLinks != undefined) )

                this.setState({books: thumbnailBooks})
            }
        })
      }
  }

  lookupBookShelf = (bookId) => {

    const shelf = this.props.bookShelfLookup[bookId]
    if (shelf == undefined) {
        return "none"
    } else {
        return shelf
    }

  }

  render() {

    const booksToShow = this.state.books.map( (item) =>  ({...item, shelf: this.lookupBookShelf(item.id)}))

    return (
<div className="search-books">
            <div className="search-books-bar">
               <Link to="/">
              <button className="close-search">Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text"
                placeholder="Search by title or author"
                onChange={this.handleSearchTextChanged}/>

              </div>
            </div>
            <div className="search-books-results">
                     <BookShelf
                        id="none"
                        title="Search Results"
                        books={booksToShow}
                        shelves={this.props.shelves}
                        updateBookshelfFunction={this.props.updateBookshelfFunction}
                        doFilter={false} 
                        />
            </div>
          </div>
    )
  }
}

SearchForm.propTypes = {
    shelves: PropTypes.array.isRequired,
    updateBookshelfFunction: PropTypes.func.isRequired,
    bookShelfLookup: PropTypes.object.isRequired,
}

export default SearchForm;
