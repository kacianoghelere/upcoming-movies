import * as MoviesService from '../../services/movies';
import * as UtilsService from '../../services/utils';
import * as ActionTypes from './types';
import {
  setFetchingDetails,
  setFetchingList
} from './fetchingActions';
import {
  setPage,
  setTotalPages
} from './paginationActions';

const setMovieDetails = (movie) => ({
  type: ActionTypes.SET_MOVIE_DETAILS,
  movie
})

const setMoviesList = (moviesList) => ({
  type: ActionTypes.SET_MOVIES_LIST,
  moviesList
})

export function fetchMovieDetails(movieId) {
  return async (dispatch) => {
    try {
      dispatch(setFetchingDetails(true))

      const { data: movie } = await MoviesService.fetchMovieDetails(movieId)

      dispatch(setMovieDetails(movie))
    } catch (error) {

    } finally {
      dispatch(setFetchingDetails(false))
    }
  }
}

export function fetchMoviesList() {
  return async (dispatch, getState) => {
    try {
      const { pagination: { page, searchText } } = getState()

      dispatch(setFetchingList(true))

      const { data } = await MoviesService.fetchMoviesList({ page, searchText })

      const { page: currentPage, results, total_pages } = data;

      dispatch(setPage(currentPage))

      dispatch(setTotalPages(total_pages))

      const moviesList = UtilsService.normalize(results)

      dispatch(setMoviesList(moviesList))
    } catch (error) {

    } finally {
      dispatch(setFetchingList(false))
    }
  }
}