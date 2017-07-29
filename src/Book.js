import React, { Component } from 'react'
import BookControl from './BookControl.js'

class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.image }}></div>
          <BookControl/>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors && this.props.authors.join(',')}</div>
      </div>      
    )
  }
}

export default Book