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

  /**
   * @description Reset the query and results state in order to display a   
   *              clean Search page
   */
  resetQuery = () => {
    this.setState({ query: '', results: [] })
  }

  /**
   * @description Query the BooksAPI with a search term. Update the results with
   *              the current shelf values for any books already in the bookList
   * @param {string} query - Term to be searched for via the BooksAPI
   */
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

  /**
   * @description Update the shelf of a given book against the BooksAPI backend
   * @param {object} book - The book to be updated
   */
  updateBookShelf(book){
    BooksAPI.update(book, book.shelf).then()
  }

  /**
   * @description Change the shelf of a given book
   * @param {object} book - The book to update
   * @param {string} shelf - The new shelf value for the book
   */
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
            resetQuery={this.resetQuery}          
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
