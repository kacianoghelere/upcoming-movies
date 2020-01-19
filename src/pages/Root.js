import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect, Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { fetchMoviesList } from '../store/actions'
import MoviesListPage from './MoviesListPage/MoviesListPage'
import MoviePage from './MoviePage/MoviePage'

class Root extends Component {

  componentDidMount() {
    this.props.fetchMoviesList();
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <Route path="/" component={MoviesListPage} />
          <Route path="/:id" component={MoviePage} />
        </Router>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  fetchMoviesList: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  fetchMoviesList
}

export default connect(null, mapDispatchToProps)(Root)