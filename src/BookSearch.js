import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import BookCategory from './BookCategory.js'

class BookSearch extends Component {

  static propTypes = {
    resetQuery: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
    results: PropTypes.array.isRequired,
    runQuery: PropTypes.func.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.resetQuery()
  }  

  /**
   * @description Execute the function to pull in search results for the 
   *              given query
   * @param {string} query - Search term to be used in the query
   */
  updateQuery = (query) => {
    this.props.runQuery(query)
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/* 
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={this.props.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />        
          </div>
        </div>
        <div className="search-books-results">
          {this.props.results.length > 0 &&
            <BookCategory
              title='Results'
              books={this.props.results}
              onChangeShelf={this.props.onChangeShelf}              
            />          
          }
        </div>
      </div>      
    )
  }
}

export default BookSearch