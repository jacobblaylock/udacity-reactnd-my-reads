import React, { Component } from 'react'

import Book from './Book.js'


class BookCategory extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books
              .map((book) => (
                <li key={book.id}>
                  <Book
                    title={book.title}
                    authors={book.authors}
                    image={book.imageLinks ? 'url("' + book.imageLinks.thumbnail + '")' : ''}
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