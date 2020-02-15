import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {

    render() {
        return (<div>A Book Shelf
                     <Book
                        id="id 000" 
                        title="A Title" 
                        imageLinks={{
                        smallThumbnail: "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"}}
                        authors={["author Hariet", "author Chuck"]}
                        shelf="read"
                      />

        </div>)
    }

}

BookShelf.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
}
export default BookShelf;
