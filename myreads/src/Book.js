import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Book extends Component {

    updateBookshelf = (event) => {
        this.props.updateBookshelfFunction(this.props.id, event.target.value)
    }

    render() {

        const currentShelf = this.props.shelf ? this.props.shelf : "none";

        return (
        <div className="book">
            <div className="book-top">
            <div className="book-cover"
            style={{ width: 128, height: 193}} >
                <img 
                    src={this.props.imageLinks.smallThumbnail} alt={this.props.title}
                    style={{ width: 128, height: 193}} />
            </div>
                  <div className="book-shelf-changer">
                  <select 
                     value={currentShelf}
                    onChange={this.updateBookshelf}
                  >
                    <option value="move" disabled>Move to...</option>
                    {
                        this.props.shelves.map(
                        (shelf) => (
                            <option value={shelf.id}>{shelf.title}</option>
                        ))
                    }
                    <option value="none">None</option>
                  </select>
                  </div>
            </div>
            <div className="book-title">{this.props.title}</div>
            <div className="book-authors">{this.props.authors}</div>
        </div>

        )
    }
}


Book.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageLinks: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    shelves: PropTypes.array.isRequired,
    updateBookshelfFunction: PropTypes.func.isRequired,
}

export default Book;
