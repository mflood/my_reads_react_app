import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {

    render() {
        return (

        <div>
        <h2>{this.props.title} ({this.props.id})</h2>
        <hr/>
        <ol>
           {
                this.props.books.filter( (book) => (book.shelf == this.props.id) ).map( (book) => (
                    <li key={book.id}>
                     <Book
                        id={book.id}
                        title={book.title}
                        imageLinks={book.imageLinks}
                        authors={book.authors}
                        shelf={book.shelf}
                        shelves={this.props.shelves}
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
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
}
export default BookShelf;
