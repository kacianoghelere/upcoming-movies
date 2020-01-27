import React from 'react'
import { NavLink } from 'react-router-dom'

import { trimText } from '../services/utils'
import MoviePoster from './MoviePoster'
import './MovieCard.scss'

export default function MovieCard({ movie }) {
  return (
    <NavLink className="MovieCard card h-100" to={`/movie/${movie.id}`}>
      <MoviePoster poster={movie.poster_path} title={movie.title} />
      <div className="card-img-overlay">
        <h4 className="card-title">{movie.title}</h4>
        <p className="card-text"><b>Release date:</b> {movie.release_date}</p>
        <p className="card-text"><b>Vote average:</b> {movie.vote_average}</p>
        <p className="card-text">
          <b>Overview:</b> {trimText(movie.overview, 200)}
        </p>
      </div>
    </NavLink>
  )
}