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
        this.setState({ results })
      })    
    }
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() =>(
          <BookSearch
            query={this.state.query}
            results={this.state.results}
            runQuery={this.runQuery}
          />
        )}/>
        <Route exact path='/' render={() => (
          <MyBooks
            myBooks={this.state.bookList}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
