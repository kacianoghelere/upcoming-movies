import React from 'react'

export default function MovieUserScore({ movie }) {
  const voteAverage = (movie.vote_average * 10)

  let ratingColor = 'bg-success';

  if (movie.vote_average >= 4 && movie.vote_average < 7) {
    ratingColor = 'bg-warning';
  } else if (movie.vote_average < 4) {
    ratingColor = 'bg-danger';
  }

  return (
    <div className="MovieUserScore mb-3">
      <p className="card-text"><b>User Score</b></p>
      <div className="progress" style={{ height: '2em' }}>
        <div
          className={`progress-bar ${ratingColor}`}
          role="progressbar"
          style={{ width: `${voteAverage}%` }}
          aria-valuenow={voteAverage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <b>{movie.vote_average} ({movie.vote_count} votes)</b>
        </div>
      </div>
    </div>
  )
}
