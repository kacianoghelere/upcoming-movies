import React from 'react'
import { NavLink } from 'react-router-dom'

import { trimText } from '../services/utils'
import MoviePoster from './MoviePoster'
import './MovieCard.scss'

function MovieCard({ movie }) {
  const { id, title, poster_path, release_date, vote_average, overview } = movie;

  return (
    <NavLink className="MovieCard card h-100" to={`/movie/${id}`}>
      <MoviePoster poster={poster_path} title={title} />
      <div className="card-img-overlay">
        <h4 className="card-title">{title}</h4>
        <p className="card-text"><b>Release date:</b> {release_date}</p>
        <p className="card-text"><b>Vote average:</b> {vote_average}</p>
        <p className="card-text"><b>Overview:</b> {trimText(overview, 200)}</p>
      </div>
    </NavLink>
  )
}

export default MovieCard