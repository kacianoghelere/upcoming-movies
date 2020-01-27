import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { fetchMovieDetails } from '../../store/actions'
import Page from '../Page/Page'
import MovieDetails from '../../components/MovieDetails'

class MoviePage extends Component {

  componentDidMount() {
    const { movie, match: { params } } = this.props

    if (!movie || ! movie.loaded) {
      this.props.fetchMovieDetails(params.movieId)
    }
  }

  render() {
    const { movie } = this.props

    return (
      <Page
        className="MoviesListPage"
        header={<NavLink to="/">Get back to the list</NavLink>}
      >
        <MovieDetails movie={movie} />
      </Page>
    )
  }
}

const mapStateToProps = ({ movies }, { match: { params } }) => ({
  movie: movies[params.movieId] || {}
})

const mapDispatchToProps = { fetchMovieDetails }

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage)