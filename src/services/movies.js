import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'http://localhost:8000/api/movies',
  headers: {
    'Authorization': `${process.env.REACT_APP_MOVINDEX_KEY}`
  },
  timeout: 30000
})

export function fetchMovieDetails(movieId) {
  return httpClient.get(`${movieId}`)
}

export function fetchMoviesList(params = {}) {
  const queryString = new URLSearchParams(params).toString()

  return httpClient.get(`/?${queryString}`)
}