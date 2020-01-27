import React from 'react'

export default function MovieGenres({ movie }) {
  return (
    <p>
      {(movie.genres || []).map((genre) => (
        <span
          key={genre.id}
          className="badge badge-secondary mr-1"
          style={{ fontSize: '100%' }}
        >
          {genre.name}
        </span>
      ))}
    </p>
  )
}
