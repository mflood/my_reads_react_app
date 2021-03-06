import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {

    render() {

        const booksToShow = this.props.doFilter ? this.props.books.filter( (book) => (book.shelf === this.props.id) ) : this.props.books
        return (

        <div>
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <ol className="books-grid">
           {
                booksToShow.map( (book) => (
                    <li key={book.id}>
                     <Book
                        id={book.id}
                        title={book.title}
                        imageLinks={book.imageLinks}
                        authors={book.authors}
                        shelf={book.shelf}
                        shelves={this.props.shelves}
                        updateBookshelfFunction={this.props.updateBookshelfFunction}
                      />
                     </li>
                ))
           }
            
        </ol>
        </div>)
    }

}

BookShelf.propTypes = {
    id: PropTypes.string.isRequired,
    // if true, only show books in this bookshelf
    doFilter: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    updateBookshelfFunction: PropTypes.func.isRequired,
}

export default BookShelf;
