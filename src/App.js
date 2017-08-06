import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import BookSearch from './BookSearch.js'
import MyBooks from './MyBooks.js'

class BooksApp extends Component {

  state = {
    query: '',
    bookList: [],
    results: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((bookList) => {
      this.setState({ bookList })
    })
  }  

  runQuery = (query) => {
    this.setState({ query })
    if(query) {
      BooksAPI.search(query).then((results) => {
        this.setState({ 
          results: results
            .map((r) => {
              const book = this.state.bookList.find((b) => b.id === r.id)
              book && (r.shelf = book.shelf)
              return r
            })
        })
      })    
    }
  }

  updateBookShelf(book){
    BooksAPI.update(book, book.shelf).then()
  }

  changeBookShelf = (book, shelf) => {
    book.shelf = shelf
    this.setState((state) => ({
      bookList: state.bookList.filter((b) => b.id !== book.id).concat(book)
    }))

    this.updateBookShelf(book)
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() =>(
          <BookSearch
            query={this.state.query}
            results={this.state.results}
            runQuery={this.runQuery}
            onChangeShelf={this.changeBookShelf}            
          />
        )}/>
        <Route exact path='/' render={() => (
          <MyBooks
            myBooks={this.state.bookList}
            onChangeShelf={this.changeBookShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
