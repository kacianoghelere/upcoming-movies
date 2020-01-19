import React from 'react'

import { trimText } from '../services/utils'
import MoviePoster from './MoviePoster'
import './MovieCard.scss'

const MovieCard = ({ movie }) => {
  const { title, poster_path, release_date, vote_average, overview } = movie;

  return (
    <div className="MovieCard card">
      <MoviePoster poster={poster_path} title={title} />
      <div className="card-img-overlay">
        <h4 className="card-title">{title}</h4>
        <p class="card-text"><b>Release date:</b> {release_date}</p>
        <p class="card-text"><b>Vote average:</b> {vote_average}</p>
        <p class="card-text"><b>Overview:</b> {trimText(overview, 200)}</p>
      </div>
    </div>
  )
}

export default MovieCard