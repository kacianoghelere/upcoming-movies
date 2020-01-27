import React from 'react'

import MoviePoster from './MoviePoster'
import MovieCast from './MovieCast'
import MovieDirectors from './MovieDirectors'
import MovieGenres from './MovieGenres'
import MovieStatistics from './MovieStatistics'
import MovieVideos from './MovieVideos'
import MovieUserScore from './MovieUserScore'

function MovieDetails({ movie }) {
  return (
    <div className="MovieDetails">
      <div className="row">
        <div className="col-3 my-3">
          <div className="card border-0">
            <MoviePoster
              poster={movie.poster_path}
              title={movie.title}
            />
            <div className="card-body px-0">
              <MovieUserScore movie={movie} />
              <MovieStatistics movie={movie} />
            </div>
          </div>
        </div>
        <div className="col-9 my-3">
          <h2>{movie.title}</h2>
          <h4 className="card-title text-muted">{movie.tagline}</h4>
          <MovieDirectors movie={movie} />
          <MovieGenres movie={movie} />
          <p><b>Website:</b> <a href={movie.homepage}>{movie.homepage}</a></p>
          <h4>Overview</h4>
          <p>{movie.overview}</p>
          <MovieVideos movie={movie} />
          <MovieCast movie={movie} />
        </div>
      </div>
    </div>
  )
}

export default MovieDetails