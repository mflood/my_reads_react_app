import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchForm extends Component {

  state = {
    books: []
  }

  handleSearchTextChanged = (e) => {

      console.log("handleSearchTextChanged", e.target.value);

      if (e.target.value === "") {
        this.setState({books: []})
      } else {
        // make api call 
        BooksAPI.search(e.target.value)
        .then((results) => {
            console.log(results);

            if (typeof results.error !== 'undefined') {
                // no books came back
                this.setState({books: []})
            } else {
                this.setState({books: results})
            }
        })
      }
  }


  render() {
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
              <ol className="books-grid">
                <li key="1">Num results: { this.state.books.length}</li>
              </ol>
            </div>
          </div>
    )

  }

}

export default SearchForm;
