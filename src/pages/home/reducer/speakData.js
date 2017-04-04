import { handleActions } from 'redux-actions';

import * as actions from '../action';

const initState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false,
}

const speakDataReducer = handleActions({
  [actions.fetchingData]: (state, action) => ({
    ...state,
    isFetching: true,
  }),
  [actions.fetchingDataSuccess]: (state, action) => ({
    ...state,
    isFetching: false,
    data: state.data.concat(action.payload),
  }),
  [actions.fetchingDataFailure]: (state, action) => ({
    ...state,
    isFetching: false,
    error: true,
  })
}, initState);

export default speakDataReducer;
