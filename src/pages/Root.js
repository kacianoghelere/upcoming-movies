import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MoviesListPage from './MoviesListPage/MoviesListPage'
import MoviePage from './MoviePage/MoviePage'

function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route
            path="/"
            component={MoviesListPage}
            exact
          />
          <Route
            path="/movie/:movieId"
            component={MoviePage}
          />
        </Switch>
      </Router>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root