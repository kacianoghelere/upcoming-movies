import React from 'react'

import MoviesList from '../../components/MoviesList'
import './MoviesListPage.scss'

export default function MoviesListPage() {
  return (
    <div className="MoviesListPage container">
      <h1>Movies List</h1>
      <MoviesList />
    </div>
  );
}