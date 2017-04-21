import { handleActions } from 'redux-actions';

import * as actions from '../action';

const initState = {
  data: null,
  dataFetched: false,
  isFetching: false,
  error: false,
}

const postReducer = handleActions({
  [actions.fetchingData]: (state, action) => ({
    ...state,
    isFetching: true,
  }),
  [actions.fetchingDataSuccess]: (state, action) => ({
    ...state,
    isFetching: false,
    data: action.payload.data,
  }),
  [actions.fetchingDataFailure]: (state, action) => ({
    ...state,
    isFetching: false,
    error: true,
  })
}, initState);

export default postReducer;
