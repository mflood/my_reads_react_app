import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Book extends Component {

    render() {
    console.log(this.props)
        return (
        <div>
            {this.props.id}
            <br/>
            <img src={this.props.imageLinks.smallThumbnail} alt={this.props.title}/>
            <br/>
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
            <br/>
            {this.props.title} / {this.props.shelf}
            <br/>
            {this.props.authors}
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
