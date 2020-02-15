import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Book extends Component {

    render() {
        return (
        <div>
            {this.props.id}
            <br/>
            <img src={this.props.imageLinks.smallThumbnail} alt={this.props.title}/>
            <br/>
            {this.props.title}
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

}

export default Book;
