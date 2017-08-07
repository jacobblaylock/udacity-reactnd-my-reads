import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BookControl from './BookControl.js'


class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  /**
   * @description Execute the function to change the shelf of the selected
   *              book
   * @param {string} shelf - The new shelf value of the book
   */
  runChangeShelf = (shelf) => {
    this.props.onChangeShelf(this.props.book, shelf)
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.book.imageLinks ? 'url("' + this.props.book.imageLinks.thumbnail + '")' : '' }}></div>
          <BookControl
            shelf={this.props.book.shelf || 'none'}
            onSelectShelf={this.runChangeShelf}            
          />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors && this.props.book.authors.join(',')}</div>
      </div>      
    )
  }
}

export default Book