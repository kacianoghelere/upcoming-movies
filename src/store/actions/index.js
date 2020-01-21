import * as MoviesService from '../../services/movies';
import * as UtilsService from '../../services/utils';
import {
  setFetchingDetails,
  setFetchingList
} from './fetchingActions';
import {
  setPage,
  setSearchText,
  setTotalPages
} from './paginationActions';
import {
  resetMoviesList,
  setMovieDetails,
  setMoviesList
} from './moviesActions';

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

export function fetchMoviesList(searchText = '') {
  return async (dispatch, getState) => {
    try {
      const { pagination } = getState()

      dispatch(setFetchingList(true))

      const { data } = await MoviesService.fetchMoviesList({
        page: pagination.page,
        searchText
      })

      if (searchText !== pagination.searchText) {
        dispatch(setSearchText(searchText))

        dispatch(resetMoviesList())
      }

      const { page: currentPage, results, total_pages } = data;

      dispatch(setPage(currentPage))

      dispatch(setTotalPages(total_pages))

      const moviesList = UtilsService.normalize(results)

      dispatch(setMoviesList(moviesList))
    } catch (error) {
      console.error('fetchMoviesList', error)
    } finally {
      dispatch(setFetchingList(false))
    }
  }
}

export function fetchMoviesListNextPage() {
  return (dispatch, getState) => {
    const { pagination: { page, searchText, totalPages } } = getState()

    if ((page + 1) >= totalPages) {
      return
    }

    const nextPage = (page + 1)

    dispatch(setPage(nextPage))

    dispatch(fetchMoviesList(searchText))
  }
}