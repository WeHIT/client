import { handleActions } from 'redux-actions';

import * as actions from '../action';

const initState = {
  data: {},
  dataFetched: false,
  isFetching: false,
  error: false,
}

const regReducer = handleActions({
  [actions.fetchingReg]: (state, action) => ({
    ...state,
    data: {},
    isFetching: true,
  }),
  [actions.fetchingRegSuccess]: (state, action) => ({
    ...state,
    data: action.payload,
    isFetching: false,
  }),
  [actions.fetchingLoginFailure]: (state, actions) => ({
    ...state,
    isFetching: false,
    error: true
  }),
}, initState);

export default regReducer;
