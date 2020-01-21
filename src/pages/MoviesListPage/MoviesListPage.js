import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchMoviesList } from '../../store/actions'
import Page from '../Page/Page'
import LoadingIndicator from '../../components/LoadingIndicator'
import MoviesList from '../../components/MoviesList'
import MoviesSearchBox from '../../components/MoviesSearchBox'

class MoviesListPage extends Component {

  componentDidMount() {
    this.props.fetchMoviesList()
  }

  render() {
    return (
      <Page
        className="MoviesListPage"
        header={<MoviesSearchBox />}
      >
        <MoviesList movies={this.props.movies} />
        {this.props.fetchingMoviesList ? <LoadingIndicator /> : null}
      </Page>
    );
  }
}

MoviesListPage.propTypes = {
  movies: PropTypes.object.isRequired,
  fetchMoviesList: PropTypes.func.isRequired
}

const mapStateToProps = ({ fetching: { fetchingMoviesList }, movies }) => ({
  fetchingMoviesList,
  movies
})

const mapDispatchToProps = { fetchMoviesList }

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListPage)