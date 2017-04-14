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
    data: state.data.concat(action.payload.data),
  }),
  [actions.fetchingDataSuccess]: (state, action) => ({
    ...state,
    isFetching: false,
    data: state.data.slice(0, state.data.length - 1).concat(action.payload.data),
  }),
  [actions.fetchingDataFailure]: (state, action) => ({
    ...state,
    isFetching: false,
    error: true,
  })
}, initState);

export default speakDataReducer;
