import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchMoviesList } from '../../store/actions'
import Page from '../Page/Page'
import MoviesList from '../../components/MoviesList'

class MoviesListPage extends Component {

  componentDidMount() {
    this.props.fetchMoviesList()
  }

  render() {
    return (
      <Page
        className="MoviesListPage"
        header={<h2 className="text-center">Upcoming movies</h2>}
      >
        <MoviesList movies={this.props.movies} />
      </Page>
    );
  }
}

MoviesListPage.propTypes = {
  movies: PropTypes.object.isRequired,
  fetchMoviesList: PropTypes.func.isRequired
}

const mapStateToProps = ({ movies }) => ({ movies })

const mapDispatchToProps = { fetchMoviesList }

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListPage)