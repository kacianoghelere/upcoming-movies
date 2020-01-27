import * as ActionTypes from '../actions/types'

const initialState = {}

export default function movies(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_MOVIES_LIST:
      return {
        ...state,
        ...action.moviesList
      }
    case ActionTypes.SET_MOVIE_DETAILS:
      return {
        ...state,
        [action.movie.id]: {
          ...state[action.movie.id],
          ...action.movie,
          loaded: true
        }
      }
    case ActionTypes.RESET_MOVIES_LIST:
      return initialState
    default:
      return state
  }
}