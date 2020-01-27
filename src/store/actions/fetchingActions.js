import * as ActionTypes from './types';

export const setFetchingDetails = (isFetching) => ({
  type: ActionTypes.SET_FETCHING_MOVIE_DETAILS,
  isFetching
})

export const setFetchingList = (isFetching) => ({
  type: ActionTypes.SET_FETCHING_MOVIES_LIST,
  isFetching
})