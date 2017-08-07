import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Book from './Book.js'


class BookCategory extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books
              .filter((book, index, array) => {
                if(array.findIndex((ar) => ar.id === book.id) !== index){
                  return false
                } else {
                  return true
                }
              })
              .map((book) => (
                <li key={book.id}>
                  <Book
                    book={book}
                    onChangeShelf={this.props.onChangeShelf}                    
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookCategory