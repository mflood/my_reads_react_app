import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Book extends Component {

    render() {
    console.log(this.props)
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
                  <select value={this.props.shelf}>
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
            <div className="book-title">{this.props.id}</div>
            <div className="book-title">{this.props.shelf}</div>
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
}

export default Book;
