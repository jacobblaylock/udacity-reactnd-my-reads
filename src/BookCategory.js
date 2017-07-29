import React, { Component } from 'react'
import Book from './Book.js'

class BookCategory extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.category}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <li key={book.title}>
                <Book
                  title={book.title}
                  author={book.author}
                  image={book.image}
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