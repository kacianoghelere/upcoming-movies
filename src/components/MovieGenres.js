import React from 'react'

export default function MovieGenres({ movie }) {
  return (
    <p>
      {(movie.genres || []).map(({ name }) => (
        <span
          className="badge badge-secondary mr-1"
          style={{'font-size': '100%'}}
        >
          {name}
        </span>
      ))}
    </p>
  )
}
