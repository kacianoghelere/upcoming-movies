import * as ActionTypes from './types';

export const setMovieDetails = (movie) => ({
  type: ActionTypes.SET_MOVIE_DETAILS,
  movie
})

export const setMoviesList = (moviesList) => ({
  type: ActionTypes.SET_MOVIES_LIST,
  moviesList
})

export const resetMoviesList = () => ({
  type: ActionTypes.RESET_MOVIES_LIST
})