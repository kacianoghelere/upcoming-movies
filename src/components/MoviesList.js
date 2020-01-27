import React from 'react'

import MovieCard from './MovieCard'

export default function MoviesList({ movies }) {
  const sortedMovies = Object.values(movies).sort((a, b) => a.index - b.index)

  return (
    <div className="MoviesList row mx-0">
      {sortedMovies.map((movie) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-1" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  )
}