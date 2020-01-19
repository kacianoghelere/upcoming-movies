import axios from 'axios'

const baseUrl = 'http://localhost:8000/api/movies'

export function fetchMovieDetails(movieId) {
  return axios.get(`${baseUrl}/${movieId}`)
}

export function fetchMoviesList(params = {}) {
  const queryString = new URLSearchParams(params).toString()

  return axios.get(`${baseUrl}?${queryString}`)
}