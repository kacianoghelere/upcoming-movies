import { combineReducers } from 'redux'

import fetching from './fetchingReducer'
import movies from './moviesReducer'
import pagination from './paginationReducer'

export default combineReducers({
  fetching,
  movies,
  pagination
})