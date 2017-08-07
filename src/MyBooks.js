import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import BookCategory from './BookCategory.js'

class MyBooks extends Component {
  static propTypes = {
    myBooks: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookCategory
              title='Currently Reading'
              books={this.props.myBooks.filter((book) => book.shelf === 'currentlyReading')}
              onChangeShelf={this.props.onChangeShelf}
            />
            <BookCategory
              title='Want to Read'
              books={this.props.myBooks.filter((book) => book.shelf === 'wantToRead')}
              onChangeShelf={this.props.onChangeShelf}
            />    
            <BookCategory
              title='Read'
              books={this.props.myBooks.filter((book) => book.shelf === 'read')}
              onChangeShelf={this.props.onChangeShelf}
            />                      
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default MyBooks