import * as ActionTypes from '../actions/types'

const fetchingInitialState = {
  fetchingMovieDetails: false,
  fetchingMoviesList: false
}

export default function fetching(state = fetchingInitialState, action) {
  switch (action.type) {
    case ActionTypes.SET_FETCHING_MOVIE_DETAILS:
      return {
        ...state,
        fetchingMovieDetails: action.isFetching
      }
    case ActionTypes.SET_FETCHING_MOVIES_LIST:
      return {
        ...state,
        fetchingMoviesList: action.isFetching
      }
    default:
      return state
  }
}