import React from 'react'

export default function MovieDirectors({ movie }) {
  const directorNames = (movie.directors || [])
    .map(({ name }) => name)
    .join(', ')

  return (
    <p><b>Directed by:</b> {directorNames}</p>
  )
}
