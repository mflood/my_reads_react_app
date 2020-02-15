import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class SearchForm extends Component {

  componentDidMount() {
    BooksAPI.search('Horror')
      .then((results) => {
        console.log(results)
        //this.setState(() => ({
        //  contacts
        //})) 
      })  
  }

  render() {
       return (<div>A SearchForm</div>)
  }

}

export default SearchForm;
