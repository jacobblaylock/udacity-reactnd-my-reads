import React, { Component } from 'react'

class BookControl extends Component {

  state = {
    optionSelected: this.props.shelf
  }

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