import React from 'react'

export default function MovieStatistics({ movie }) {
  return (
    <>
      <p className="card-text"><b>Status:</b> {movie.status}</p>
      <p className="card-text"><b>Release date:</b> {movie.release_date}</p>
      <p className="card-text"><b>Budget:</b> {movie.budget}</p>
      <p className="card-text"><b>Revenue:</b> {movie.revenue}</p>
    </>
  )
}
