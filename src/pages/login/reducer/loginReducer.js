import { handleActions } from 'redux-actions';

import * as actions from '../action';

const initState = {
  data: {},
  dataFetched: false,
  isFetching: false,
  error: false,
}

const loginReducer = handleActions({
  [actions.fetchingLogin]: (state, action) => ({
    ...state,
    data: {},
    isFetching: true,
  }),
  [actions.fetchingLoginSuccess]: (state, action) => ({
    ...state,
    data: action.payload,
    isFetching: false,
  }),
  [actions.fetchingLoginFailure]: (state, action) => ({
    ...state,
    isFetching: false,
    error: true
  }),
}, initState);

export default loginReducer;
