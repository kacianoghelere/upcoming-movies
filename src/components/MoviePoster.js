import React from 'react'

function MoviePoster({ poster, title }) {
  return (
    <img
      className="card-img-top"
      src={`https://image.tmdb.org/t/p/w500/${poster}`}
      alt={title}
    />
  )
}

export default MoviePoster
