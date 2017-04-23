import { handleActions } from 'redux-actions';

import * as actions from '../action';

const initState = {
  data: {},
  dataFetched: false,
  isFetching: false,
  error: false,
}

const newCommentReducer = handleActions({
  [actions.postingData]: (state, action) => ({
    ...state,
    isFetching: true,
  }),
  [actions.postingDataSuccess]: (state, action) => ({
    ...state,
    isFetching: false,
    data: action.payload.data,
  }),
  [actions.postingDataFailure]: (state, action) => ({
    ...state,
    isFetching: false,
    error: true,
  })
}, initState);

export default newCommentReducer;
