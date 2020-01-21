import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchMoviesList } from '../store/actions'
import './MoviesSearchBox.scss'

let timeoutId = null

class MoviesSearchBox extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchText: this.props.searchText
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target: { value } }) {
    this.setState({
      searchText: value
    })

    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      this.props.fetchMoviesList(value)
    }, 300);
  }

  render() {
    return (
      <div className="MoviesSearchBox input-group flex-nowrap my-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="search-indicator">
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
        </div>
        <input
          className="form-control"
          type="text"
          placeholder="Search for movies here"
          aria-label="Search for movies here"
          aria-describedby="search-indicator"
          value={this.state.searchText}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ pagination: { searchText } }) => ({ searchText })

const mapDispatchToProps = { fetchMoviesList }

export default connect(mapStateToProps, mapDispatchToProps)(MoviesSearchBox)