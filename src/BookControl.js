import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookControl extends Component {

  static propTypes = {
    shelf: PropTypes.string.isRequired,
    onSelectShelf: PropTypes.func.isRequired
  }

  state = {
    optionSelected: this.props.shelf
  }

  /**
   * @description Set the current shelf value for a book upon selection
   * @param {string} event - The selected item
   */
  onSelect = (event) => {
    this.setState({ optionSelected: event.target.value})
    this.props.onSelectShelf(event.target.value)
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.optionSelected} onChange={this.onSelect}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>      
    )
  }
}

export default BookControl