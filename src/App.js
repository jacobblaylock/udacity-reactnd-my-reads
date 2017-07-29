import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch.js'
import MyBooks from './MyBooks.js'

class BooksApp extends Component {
  constructor(props) {
    super(props)

    this.toggleSearchPage = this.toggleSearchPage.bind(this)
  }

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  toggleSearchPage() {
    this.setState((state) => {
      state.showSearchPage = !this.state.showSearchPage
    })    
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <BookSearch 
            onBackClick={this.toggleSearchPage}  
          />
        ) : (
          <MyBooks
            onAddClick={this.toggleSearchPage}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
