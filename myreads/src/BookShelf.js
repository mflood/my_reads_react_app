import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {

    render() {
        return (

        <div>
        <h2>{this.props.title} ({this.props.id})</h2>
        <ol>
           {
                this.props.books.map( (book) => (
                    <li key={book.id}>
                     <Book
                        id={book.id}
                        title={book.title}
                        imageLinks={book.imageLinks}
                        authors={book.authors}
                        shelf={book.shelf}
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
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
}
export default BookShelf;
