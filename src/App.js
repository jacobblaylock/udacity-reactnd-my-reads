import React, { Component } from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch.js'
import MyBooks from './MyBooks.js'

class BooksApp extends Component {

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() =>(
          <BookSearch/>
        )}/>
        <Route exact path='/' render={() => (
          <MyBooks/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
