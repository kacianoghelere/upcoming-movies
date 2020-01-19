import React from 'react'
import { connect } from 'react-redux'

import MovieCard from './MovieCard'

function MoviesList({ movies = {} }) {
  const movieCards = Object.values(movies).map((movie) => {
    return <MovieCard key={movie.id} movie={movie} />
  })

  return (
    <div className="card-columns">
      {movieCards}
    </div>
  )
}

const mapStateToProps = ({ movies }) => ({
  movies
})

export default connect(
  mapStateToProps
)(MoviesList)